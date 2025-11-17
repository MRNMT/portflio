# Running Local Development Server for Portfolio

This project includes a simple batch script to start a local HTTP server using Python.

## Steps to Run the Server

1. Make sure you have Python 3 installed on your system. You can download it from https://www.python.org/downloads/

2. Open the folder containing your portfolio project in File Explorer.

3. Double-click the `start-server.bat` file to run it. This will open a command prompt window and start a local server on port 8000.

4. Open your web browser and navigate to:

```
http://localhost:8000
```

5. You should see your portfolio homepage. Use the navigation links to browse other pages.

## Troubleshooting

- If the server does not start, ensure Python 3 is installed and added to your system PATH.

- If port 8000 is in use, you can modify `start-server.bat` to use a different port by changing the command:

```
python -m http.server 8000
```

to

```
python -m http.server <your-port-number>
```

## Alternative: Run Server Manually

If you prefer, you can run the server manually:

1. Open a command prompt or terminal.

2. Navigate to your project directory.

3. Run the command:

```
python -m http.server 8000
```

4. Open your browser at `http://localhost:8000`

---

If you need further assistance, please ask!
