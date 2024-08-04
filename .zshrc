#!/usr/bin/env zsh
# --------------------------------------------------------------------------
#   ZSH remote control
# --------------------------------------------------------------------------

#   Setup → Initialization
# ------------------------------------------------------------

# Import environment file.
source $HOME/.env;
if [[ -z ${ENVIRONMENT} ]]; then
	echo "Environment file not found! This may have negative effects on the Shell session.";
	printf "\n\n";
	echo "Please see README.md for more details.";
	exit 1;
fi

# Initial $PATH
export PATH=$HOME/.composer/vendor/bin:/opt/homebrew/bin:/opt/homebrew/sbin:$HOME/bin:$PYENV_ROOT/bin:/usr/local/bin:$PATH

# Import global variables
source $DOTFILES_PATH_ZSH/exports

# Import custom logger with colors.
source $DOTFILES_PATH_ZSH/colors
source $DOTFILES_PATH_ZSH/log


#   Setup → Methods
# ------------------------------------------------------------

# Loops through a given directory and imports all files found.
# @usage import_config_files "path/to/dir"
function import_config_files {
	# Check for parameters.
	if [ $# -eq 0 ]; then
		log-error "You forgot to add a path to import files."
	fi

	# Create loop to import config files.
	for FILE in $1/**
	do
		if [[ -f "$FILE" ]] && [[ "${FILE: -4}" != ".bak" ]]; then
			source $FILE;
		fi
	done
}


#   Setup → OhMyZSH → General
# ------------------------------------------------------------

# Set ZSH theme.
ZSH_THEME="$ZSH_THEME"

# Enable animated waiting dots.
COMPLETION_WAITING_DOTS="true"

# Set format of timestamps for history.
# @see 
# TODO Add URL for datetime options.
# @returns 1962-08-06_18:18:18
HIST_STAMPS="YYYY-MM-DD_HH:mm:ss"


#   Setup → OhMyZSH → Plugins
# ------------------------------------------------------------

# Set up plugin queue.
plugins=(
  zsh-history-enquirer
	bgnotify
	emoji-clock
	encode64
	extract
	genpass
  git
	git-auto-fetch
	git-extras
	gitignore
	jump
	macos
  urltools
	web-search
  zsh-autosuggestions
  zsh-syntax-highlighting
  jovial
)

# Import ZSH plugin settings and aliases
import_config_files "$DOTFILES_PATH_ZSH/ohmyzsh/plugins"


#   Setup → OhMyZSH → Themes
# ------------------------------------------------------------

# Include OhMyZSH theme file.
source $DOTFILES_PATH_ZSH/ohmyzsh/themes/$ZSH_THEME


# Start OhMyZSH.
source $ZSH/oh-my-zsh.sh


#   User configuration → Environment
# ------------------------------------------------------------

# Aliases
source $DOTFILES_PATH_ZSH/aliases

# Command line interfaces
import_config_files "$DOTFILES_PATH_ZSH/cli"

# Custom executables.
source $DOTFILES_PATH_ZSH/bin/create-project;
source $DOTFILES_PATH_ZSH/bin/reboot-enedos;


# --------------------------------------------------------------------------
#   $PATH
#   Reshuffle $PATH to ensure correct usage.
#   @note Take that, $PATH!
#   @see https://bit.ly/3BYvjUW
# --------------------------------------------------------------------------
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_NDK_HOME:$PATH
