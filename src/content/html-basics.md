# HTML Basics

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements.

![HTML5 Structure Diagram](https://avatars.githubusercontent.com/u/17473503?v=4)
*HTML5 semantic structure diagram showing how different elements are typically organized on a webpage*

## Basic HTML Document Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <header>
        <h1>This is a heading</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
        <img src="image.jpg" alt="Description of image">
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>
</html>
```

## Common HTML Elements

Here's a comprehensive list of HTML elements:

- **Heading Elements**
  - `<h1>` - Main heading
  - `<h2>` - Section heading
  - `<h3>` - Sub-section heading
  - `<h4>`, `<h5>`, `<h6>` - Lower level headings

- **Text Elements**
  - `<p>` - Paragraphs
  - `<span>` - Inline container
  - `<strong>` or `<b>` - Bold text
  - `<em>` or `<i>` - Italic text
  - `<mark>` - Highlighted text
  - `<del>` - Deleted text
  - `<ins>` - Inserted text
  - `<sub>` - Subscript
  - `<sup>` - Superscript

- **Link Elements**
  - `<a href="https://example.com">` - External link
  - `<a href="/page">` - Internal link
  - `<a href="#section">` - Anchor link
  - `<a href="mailto:user@example.com">` - Email link

- **Media Elements**
  - `<img>` - Images
  - `<video>` - Video content
  - `<audio>` - Audio content
  - `<canvas>` - Drawing element
  - `<svg>` - Scalable Vector Graphics

- **Container Elements**
  - `<div>` - Generic block container
  - `<section>` - Section of content
  - `<article>` - Independent content
  - `<aside>` - Sidebar content
  - `<header>` - Header content
  - `<footer>` - Footer content
  - `<nav>` - Navigation menu

> HTML is the backbone of every website. Understanding HTML is essential for web development. Without HTML, there would be no web pages, and the internet as we know it wouldn't exist.

## Nested Lists Example

Here's how you can nest different types of lists:

1. First ordered item
2. Second ordered item
   * Unordered sub-list item
   * Another unordered sub-list item
     1. Ordered sub-sub-list
     2. Another ordered sub-sub-list
3. Third ordered item
   - [ ] Unchecked task
   - [x] Checked task

## JSON Example

Here's an example of a JSON configuration:

```json
{
  "name": "HTML Tutorial",
  "author": {
    "firstName": "John",
    "lastName": "Doe",
    "credentials": ["PhD", "Web Developer"]
  },
  "topics": [
    "Basic Structure",
    "Elements",
    "Attributes",
    "Forms",
    "Semantics"
  ],
  "difficulty": 1,
  "isPublished": true,
  "lastUpdated": "2023-10-15T14:30:00Z"
}
```

## Advanced Table Examples

### Simple Table

| Tag | Description | Category |
|-----|-------------|----------|
| `<html>` | Root element | Structure |
| `<head>` | Contains meta information | Structure |
| `<body>` | Contains the visible content | Structure |

### Table with Alignment

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|-------------:|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Long text that spans multiple words | Short text | 123.45 |
| Code: `<div>` | **Bold text** | *Italic text* |

### Nested Elements in Tables

| Feature | Syntax | Example |
|---------|--------|---------|
| Links | `<a href="url">text</a>` | [HTML Tutorial](https://www.example.com) |
| Images | `<img src="url" alt="text">` | ![HTML5 Logo](https://www.example.com/html5.png) |
| Code blocks | `<pre><code>...</code></pre>` | `function hello() { return "world"; }` |

## Formatting Examples

**Bold text** and *italic text* can be combined to create ***bold and italic text***.

Superscript: E=mc^2^

Subscript: H~2~O

~~Strikethrough~~ text

## Horizontal Rule

Above the line

---

Below the line

## Definition Lists

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for styling web pages.</dd>
</dl>

## Block Quotes with Nested Content

> This is a blockquote
> 
> > This is a nested blockquote
> >
> > * With a list inside
> > * And another item
>
> Back to the first level

## Links with Titles

[HTML5 Specification](https://html.spec.whatwg.org/ "HTML Living Standard")

## Image with Alt Text and Title

![HTML5 Logo](https://via.placeholder.com/150 "HTML5 Logo Example")

## Footnotes

Here's a statement with a footnote[^1].

[^1]: This is the footnote content.

## Table of Contents

- [HTML Basics](#html-basics)
  - [Basic HTML Document Structure](#basic-html-document-structure)
  - [Common HTML Elements](#common-html-elements)
  - [Nested Lists Example](#nested-lists-example)
  - [JSON Example](#json-example)
  - [Advanced Table Examples](#advanced-table-examples)

---

*This document demonstrates various Markdown syntax features for testing rendering capabilities.*

## Code Examples in Various Languages

### HTML Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content of the home section.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Example
```css
/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Typography */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background-color: #4a5568;
  color: white;
  padding: 1rem 2rem;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #f8b500;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }
}
```

### JavaScript Example
```javascript
// Simple JavaScript class example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  static compareAges(person1, person2) {
    return person1.age - person2.age;
  }
}

// Create instances
const alice = new Person('Alice', 28);
const bob = new Person('Bob', 32);

// Call methods
alice.greet(); // "Hello, my name is Alice and I am 28 years old."

// Use static method
if (Person.compareAges(alice, bob) < 0) {
  console.log(`${alice.name} is younger than ${bob.name}`);
} else {
  console.log(`${alice.name} is older than or the same age as ${bob.name}`);
}

// Async function example
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### Python Example
```python
import os
from typing import List, Dict, Optional
import pandas as pd

class DataProcessor:
    """A class for processing data files."""
    
    def __init__(self, input_dir: str):
        """Initialize with input directory path."""
        self.input_dir = input_dir
        self.files = []
        self._scan_directory()
    
    def _scan_directory(self) -> None:
        """Scan the directory for CSV files."""
        if not os.path.exists(self.input_dir):
            raise FileNotFoundError(f"Directory not found: {self.input_dir}")
        
        self.files = [
            f for f in os.listdir(self.input_dir) 
            if f.endswith('.csv')
        ]
        
    @property
    def file_count(self) -> int:
        """Return the number of CSV files found."""
        return len(self.files)
    
    def process_file(self, filename: str) -> pd.DataFrame:
        """Process a single file and return a DataFrame."""
        filepath = os.path.join(self.input_dir, filename)
        
        # Read the CSV file
        df = pd.read_csv(filepath)
        
        # Some basic processing
        df = df.dropna()  # Drop rows with missing values
        
        # Apply some transformations
        if 'date' in df.columns:
            df['date'] = pd.to_datetime(df['date'])
            
        return df
    
    def process_all(self) -> Dict[str, pd.DataFrame]:
        """Process all CSV files and return a dictionary of DataFrames."""
        result = {}
        for file in self.files:
            try:
                result[file] = self.process_file(file)
                print(f"Processed {file} successfully")
            except Exception as e:
                print(f"Error processing {file}: {str(e)}")
        
        return result


# Usage example
if __name__ == "__main__":
    processor = DataProcessor("data/raw")
    print(f"Found {processor.file_count} CSV files")
    
    # Process all files
    dataframes = processor.process_all()
    
    # Do something with the processed data
    for name, df in dataframes.items():
        print(f"{name}: {len(df)} rows, {len(df.columns)} columns")
```

### Rust Example
```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

#[derive(Debug, Clone)]
struct Task {
    id: u64,
    description: String,
    completed: bool,
}

impl Task {
    fn new(id: u64, description: &str) -> Self {
        Task {
            id,
            description: description.to_string(),
            completed: false,
        }
    }
    
    fn mark_completed(&mut self) {
        self.completed = true;
        println!("Task {} completed: {}", self.id, self.description);
    }
}

struct TaskManager {
    tasks: HashMap<u64, Task>,
    next_id: u64,
}

impl TaskManager {
    fn new() -> Self {
        TaskManager {
            tasks: HashMap::new(),
            next_id: 1,
        }
    }
    
    fn add_task(&mut self, description: &str) -> u64 {
        let id = self.next_id;
        self.next_id += 1;
        
        let task = Task::new(id, description);
        self.tasks.insert(id, task);
        
        id
    }
    
    fn complete_task(&mut self, id: u64) -> Result<(), String> {
        match self.tasks.get_mut(&id) {
            Some(task) => {
                task.mark_completed();
                Ok(())
            }
            None => Err(format!("Task with id {} not found", id)),
        }
    }
    
    fn list_tasks(&self) -> Vec<&Task> {
        self.tasks.values().collect()
    }
}

fn main() {
    // Create a shared task manager
    let manager = Arc::new(Mutex::new(TaskManager::new()));
    
    // Clone for the producer thread
    let producer_manager = Arc::clone(&manager);
    let producer = thread::spawn(move || {
        let tasks = vec![
            "Learn Rust fundamentals",
            "Understand ownership and borrowing",
            "Master concurrency in Rust",
            "Build a small project",
        ];
        
        for task_desc in tasks {
            let mut lock = producer_manager.lock().unwrap();
            let id = lock.add_task(task_desc);
            println!("Added task {}: {}", id, task_desc);
            drop(lock); // Release the lock
            
            // Sleep to simulate work
            thread::sleep(std::time::Duration::from_millis(100));
        }
    });
    
    // Wait a bit for some tasks to be added
    thread::sleep(std::time::Duration::from_millis(300));
    
    // Clone for the consumer thread
    let consumer_manager = Arc::clone(&manager);
    let consumer = thread::spawn(move || {
        for id in 1..=4 {
            let mut lock = consumer_manager.lock().unwrap();
            match lock.complete_task(id) {
                Ok(_) => {},
                Err(e) => println!("Error: {}", e),
            }
            drop(lock); // Release the lock
            
            // Sleep to simulate work
            thread::sleep(std::time::Duration::from_millis(150));
        }
    });
    
    // Wait for both threads to complete
    producer.join().unwrap();
    consumer.join().unwrap();
    
    // Print final task list
    let lock = manager.lock().unwrap();
    println!("\nFinal task list:");
    for task in lock.list_tasks() {
        println!("Task {}: {} - {}", 
            task.id, 
            task.description,
            if task.completed { "Completed" } else { "Pending" }
        );
    }
}
```

### YAML Example
```yaml
# Project configuration file
project:
  name: My Awesome Project
  version: 1.0.0
  description: A sample project to demonstrate YAML syntax
  
environment:
  production:
    url: https://example.com
    database:
      host: db.example.com
      port: 5432
      username: ${DB_USER}
      password: ${DB_PASSWORD}
  
  development:
    url: http://localhost:3000
    database:
      host: localhost
      port: 5432
      username: dev_user
      password: dev_password
      
dependencies:
  - name: express
    version: ^4.17.1
  - name: react
    version: ^17.0.2
  - name: typescript
    version: ^4.5.4

scripts:
  start: node dist/server.js
  build: tsc && webpack --mode production
  test: jest --coverage
  deploy:
    - npm run build
    - aws s3 sync dist/ s3://my-bucket/

features:
  authentication: true
  analytics: true
  dark_mode: false
  
user_roles:
  admin:
    permissions:
      - create
      - read
      - update
      - delete
  editor:
    permissions:
      - read
      - update
  viewer:
    permissions:
      - read
```

### TOML Example
```toml
# This is a TOML document.

title = "TOML Example"
version = "1.0.0"

[owner]
name = "John Doe"
email = "john.doe@example.com"

[database]
server = "192.168.1.1"
ports = [ 8000, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

  # Indentation (tabs and/or spaces) is allowed but not required
  [servers.alpha]
  ip = "10.0.0.1"
  role = "frontend"

  [servers.beta]
  ip = "10.0.0.2"
  role = "backend"

[dependencies]
express = "^4.17.1"
react = "^17.0.2"
typescript = "^4.5.4"

[features]
authentication = true
analytics = true
dark_mode = false

[[items]]
name = "Item 1"
sku = 12345
price = 19.99

[[items]]
name = "Item 2"
sku = 67890
price = 29.99
tags = ["red", "small"]
```

### Java Example
```java
package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * A simple task management system.
 */
public class TaskManager {
    
    private final List<Task> tasks = new ArrayList<>();
    private long nextId = 1;
    
    /**
     * Adds a new task and returns its ID.
     * 
     * @param title The task title
     * @param description The task description
     * @return The generated task ID
     */
    public long addTask(String title, String description) {
        Task task = new Task(nextId++, title, description);
        tasks.add(task);
        return task.getId();
    }
    
    /**
     * Marks a task as completed.
     * 
     * @param id The task ID
     * @return true if the task was found and updated, false otherwise
     */
    public boolean completeTask(long id) {
        Optional<Task> taskOpt = findTaskById(id);
        if (taskOpt.isPresent()) {
            Task task = taskOpt.get();
            task.setCompleted(true);
            return true;
        }
        return false;
    }
    
    /**
     * Gets all tasks.
     * 
     * @return List of all tasks
     */
    public List<Task> getAllTasks() {
        return new ArrayList<>(tasks);
    }
    
    /**
     * Gets all completed tasks.
     * 
     * @return List of completed tasks
     */
    public List<Task> getCompletedTasks() {
        return tasks.stream()
                .filter(Task::isCompleted)
                .collect(Collectors.toList());
    }
    
    /**
     * Gets all pending tasks.
     * 
     * @return List of pending tasks
     */
    public List<Task> getPendingTasks() {
        return tasks.stream()
                .filter(task -> !task.isCompleted())
                .collect(Collectors.toList());
    }
    
    /**
     * Finds a task by its ID.
     * 
     * @param id The task ID
     * @return Optional containing the task if found
     */
    private Optional<Task> findTaskById(long id) {
        return tasks.stream()
                .filter(task -> task.getId() == id)
                .findFirst();
    }
    
    /**
     * Represents a task in the system.
     */
    public static class Task {
        private final long id;
        private final String title;
        private final String description;
        private boolean completed;
        
        @Override
        public String toString() {
            return String.format("Task{id=%d, title='%s', completed=%b}", 
                    id, title, completed);
        }
        
        // Constructor, getters and setters
        public Task(long id, String title, String description) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.completed = false;
        }
        
        public long getId() {
            return id;
        }
        
        public String getTitle() {
            return title;
        }
        
        public String getDescription() {
            return description;
        }
        
        public boolean isCompleted() {
            return completed;
        }
        
        public void setCompleted(boolean completed) {
            this.completed = completed;
        }
    }
} 