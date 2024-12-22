# cartdash 🧺
a simple and responsive grocery **crud** application with smooth animations, and a clean ui.

## features 👾
- **crud functionality:** add, edit, and delete grocery items. 
- **database integration:** uses pymongo with mongodb atlas for data storage. 
- **ui/ux:** clean and responsive interface with smooth transitions powered by framer motion. 
- **notifications:** toast notifications for user actions.
- **deployment:** frontend hosted on vercel; backend on render.

## what I learned 💭
- **flask & pymongo:** first experience using flask with pymongo to handle crud operations.
- **http requests:** learned to use axios for http requests & resolved challenges with axios delete, which does not accept a data parameter (used query strings instead).
- **jsonify responses:** realized all api responses must be jsonified for crud operations to work correctly.
- **inline editing:** implemented in-line editing for grocery items.
- **deployment:** successfully deploying this project. the hard part was making mongodb atlas functional, but it was worth the effort.

## limitations 🚨
- **ui bug:** after editing an item, it briefly shifts position before moving back to its original spot.

## .env files 📄
this project requires `.env` files for both the server and client, located in their respective folders.

rename the `.env.example` file in each folder to `.env`, and update it with the necessary values.

ensure these files are configured properly and not committed to version control.

## running the project 🏁
to get the project up and running on your local machine, follow these steps:

- **ensure [python](https://www.python.org/downloads/) and [node.js](https://nodejs.org/en) are installed.**
1. **clone the repository:**
```bash
git clone https://github.com/barbaraeguche/cartdash.git
```

2. **navigate to the project directory:**
```bash
cd cartdash
```

3. **run the backend:**
   1. **navigate to server directory:**
   ```bash
   cd server
   ```
   2. **install and activate virtual environment:**
   ```bash
   python3 -m venv venv
   source ./venv/bin/activate
   ```
   3. **run the flask app:**
   ```bash
   python3 app.py
   ```
   4. open [http://127.0.0.1:5000](http://127.0.0.1:5000) with your browser.

4. **run the frontend:**
   1. **navigate to client directory:**
   ```bash
   cd client
   ```
   2. **install dependencies:**
   ```bash
   pnpm install
   ```
   3. **start the development server:**
   ```bash
   pnpm run dev
   ```
   4. open [http://localhost:5173/](http://localhost:5173/) with your browser.

## gallery 📸
<details>
  <summary>showcase</summary>

</details>
