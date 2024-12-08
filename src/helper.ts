import { readFileSync } from "fs";
import { join } from "path";
import { Data } from "./types";

/**
 * Loads and parses JSON data from a specified file.
 *
 * @param filePath - The relative path to the JSON file to be loaded.
 * @returns The parsed data from the JSON file as a `Data` object.
 */
export function loadData(filePath: string): Data {
  const dataFilePath = join(__dirname, filePath);
  const jsonData = readFileSync(dataFilePath, "utf8");
  return JSON.parse(jsonData);
}
