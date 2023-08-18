import fs from "fs";

const FILE_PATH = "src/data/books.json";
const ITEMS_COUNT = 20;

const fileExists = fs.existsSync(FILE_PATH);

if (fileExists) {
    console.log(`[seeder]: Deleting prevous Books data...`);
    fs.unlinkSync(FILE_PATH);
    console.log(`[seeder]: Previous Books data deleted`);
}

var books = [];

for (let i = 0; i < ITEMS_COUNT; i++) {
    const newBook = {
        id: i,
        title: `Title N°${i}`,
        description: `description N°${i}`,
        price: Math.floor(Math.random() * 250 + 250),
        author: `Author N°${i}`,
    };

    books.push(newBook);
}

const jsonData = JSON.stringify(books);

fs.writeFile(FILE_PATH, jsonData, "utf-8", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`[seeder]: Books data successfully written`);
    }
});
