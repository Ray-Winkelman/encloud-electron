
CREATE TABLE "Files" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "filename" TEXT NOT NULL UNIQUE,
  "size" INTEGER NOT NULL
)

CREATE TABLE "File_Chunks" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "file_chunk" TEXT NOT NULL,
  "chunk" INTEGER,
  "total_chunks" INTEGER,
  "file_id" INTEGER NOT NULL,
   FOREIGN KEY("file_id") REFERENCES Files("id")
 )
