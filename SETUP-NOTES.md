# Notes for setup

**Extensions:**

- Python Indent: For correct python indentation when the code is saved
- Prettier: Code formatting for a more tidy look
- Solarized: For a different and refreshing theme
- Vscode-pets: Adds a small animal to the code editor
- Peacock: Gives each window a unique color

**Settings:**

- Changed the cursor animation style from blink => expand
- Cursor Smooth Caret Animation on smoothes the typing animation
- Word wrap on makes the text responsive with scaling vscode window

## Code used

1. **Installed Vscode and git for windows**

2. **Installing WSL& Ubuntu:** 'wsl --install -d Ubuntu24.04'

3. **Updating packages:** 'sudo apt update'

4. **Installing python3.11:** 'sudo add-apt-repository ppa:deadsnakes/ppa' => 'sudo apt update' = > 'sudo apt install python3.11'

5. **installing pip3** 'sudo apt install python3-pip'

6. **installing virtual environment** 'sudo apt install python3-venv'

   _Forgetting to use 'sudo' command to install venv raised an error(Permission denied)_

7. **Generating a SSH key** 'ssh-keygen -t ed25519 -C -httpsdula@gmail.com-

### One problem faced
* Python was already installed on my machine with version 3.12.3 
   to set it to 3.11, I created .bash_aliases file using 'nano .bash_aliases' then copied 

   'if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
   fi'

   into .bashrc to ensure the script is loaded each time I start a new shell session
   then 'source ~/.bashrc' to restart the session and apply the changes
