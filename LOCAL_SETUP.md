# GirderPay — Local Development Setup

## Prerequisites

Make sure you have the following installed:

- **Node.js** v18+ → [https://nodejs.org](https://nodejs.org)
- **Yarn** v1.22+ → `npm install -g yarn`
- **Python** 3.10+ → [https://python.org](https://python.org)
- **MongoDB** 6+ → [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

---

## Step 1: Clone / Extract the Project

If you downloaded the zip:
```bash
unzip girderpay-source.zip -d girderpay
cd girderpay
```

If you cloned from GitHub:
```bash
git clone https://github.com/YOUR_USERNAME/girderpay.git
cd girderpay
```

---

## Step 2: Start MongoDB

Make sure MongoDB is running locally on the default port (27017).

```bash
# macOS (Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod

# Windows
net start MongoDB

# Or use Docker:
docker run -d -p 27017:27017 --name mongo mongo:7
```

---

## Step 3: Configure Environment Variables

### Backend (`backend/.env`)

Open `backend/.env` and set:
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="girderpay"
CORS_ORIGINS="http://localhost:3000"
```

### Frontend (`frontend/.env`)

Open `frontend/.env` and set:
```
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=3000
```

---

## Step 4: Install & Start the Backend

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate it
# macOS/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
```

Leave this terminal running.

---

## Step 5: Install & Start the Frontend

Open a **new terminal**:

```bash
cd frontend

# Install dependencies
yarn install

# Start the dev server
yarn start
```

You should see:
```
Compiled successfully!
You can now view frontend in the browser: http://localhost:3000
```

---

## Step 6: Open in Browser

Go to **[http://localhost:3000](http://localhost:3000)**

You should see the GirderPay homepage with the dark liquid-glass theme.

---

## Available Pages

| Route         | Page                        |
|---------------|-----------------------------|
| `/`           | Homepage (Hero + Features)  |
| `/onboarding` | 6-Step Developer Onboarding |
| `/security`   | Security Vault Showcase     |
| `/pricing`    | Pricing (3 Tiers + FAQ)     |
| `/auth`       | Sign In / Sign Up Cards     |
| `/contact`    | Contact Form                |

---

## Troubleshooting

| Problem                          | Fix                                                    |
|----------------------------------|--------------------------------------------------------|
| `yarn: command not found`        | Run `npm install -g yarn`                              |
| MongoDB connection refused       | Make sure MongoDB is running on port 27017             |
| Frontend can't reach backend     | Check `REACT_APP_BACKEND_URL` in `frontend/.env`       |
| Port 3000 already in use         | Kill the process: `lsof -ti:3000 \| xargs kill -9`    |
| Port 8001 already in use         | Kill the process: `lsof -ti:8001 \| xargs kill -9`    |
| Python module not found          | Make sure your venv is activated and deps are installed |

---

## Project Structure

```
girderpay/
├── backend/
│   ├── server.py          # FastAPI application
│   ├── requirements.txt   # Python dependencies
│   └── .env               # Backend env vars
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main routing
│   │   ├── index.css      # Global styles + animations
│   │   ├── components/    # Navbar, Footer, SEOHead, shadcn/ui
│   │   └── pages/         # 6 page components
│   ├── public/
│   │   └── index.html     # HTML template + Google Fonts
│   ├── package.json       # JS dependencies
│   ├── tailwind.config.js # Tailwind theme
│   └── .env               # Frontend env vars
└── memory/
    └── PRD.md             # Product requirements doc
```
