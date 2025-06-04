import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { promises as fs } from "fs";
import path from "path";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class FileStorage implements IStorage {
  private dataDir = path.join(process.cwd(), 'data');
  private usersFile = path.join(this.dataDir, 'users.json');
  private contactsFile = path.join(this.dataDir, 'contacts.json');

  constructor() {
    this.ensureDataDirectory();
  }

  private async ensureDataDirectory(): Promise<void> {
    try {
      await fs.access(this.dataDir);
    } catch {
      await fs.mkdir(this.dataDir, { recursive: true });
    }
  }

  private async readJsonFile<T>(filePath: string, defaultValue: T): Promise<T> {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch {
      return defaultValue;
    }
  }

  private async writeJsonFile<T>(filePath: string, data: T): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  }

  async getUser(id: number): Promise<User | undefined> {
    const users = await this.readJsonFile<User[]>(this.usersFile, []);
    return users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await this.readJsonFile<User[]>(this.usersFile, []);
    return users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const users = await this.readJsonFile<User[]>(this.usersFile, []);
    const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const user: User = { ...insertUser, id };
    users.push(user);
    await this.writeJsonFile(this.usersFile, users);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const contacts = await this.readJsonFile<ContactSubmission[]>(this.contactsFile, []);
    const id = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      company: insertSubmission.company || null,
      createdAt: new Date(),
    };
    contacts.push(submission);
    await this.writeJsonFile(this.contactsFile, contacts);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const contacts = await this.readJsonFile<ContactSubmission[]>(this.contactsFile, []);
    return contacts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export const storage = new FileStorage();
