# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH


# --------------------------------------------------------------------------
#   Initialization
# --------------------------------------------------------------------------

# Import environment file.
source $HOME/.env;
if [[ -z ${ENVIRONMENT} ]]; then
	echo "Environment file not found! This may have negative effects on the Shell session.";
	printf "\n\n";
	echo "Please see README.md for more details.";
	exit 1;
fi

# Import global variables
source $DOTFILES_PATH_ZSH/exports

# Include custom logger with colors.
source $DOTFILES_PATH_ZSH/bin/colors
source $DOTFILES_PATH_ZSH/bin/log


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


# --------------------------------------------------------------------------
#   OhMyZSH
# --------------------------------------------------------------------------

#   OhMyZSH → Set up
# ------------------------------------------------------------
# Set ZSH theme.
ZSH_THEME="$ZSH_THEME"

# Enable animated waiting dots.
COMPLETION_WAITING_DOTS="true"

# Set format of timestamps for history.
# @returns 1959-02-03
HIST_STAMPS="yyyy-mm-dd"


#   OhMyZSH → Plugins
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


#   OhMyZSH → Themes
# ------------------------------------------------------------
# Include OhMyZSH theme file.
source $DOTFILES_PATH_ZSH/ohmyzsh/themes/$ZSH_THEME


#   OhMyZSH → Begin
# ------------------------------------------------------------
source $ZSH/oh-my-zsh.sh



# --------------------------------------------------------------------------
#   User configuration
# --------------------------------------------------------------------------

#   User configuration → Environment
# ------------------------------------------------------------
# Aliases
source $DOTFILES_PATH_ZSH/aliases

# Command line interfaces
import_config_files "$DOTFILES_PATH_ZSH/cli"

# --------------------------------------------------------------------------
#   $PATH
#   Reshuffle $PATH to ensure correct usage.
#   @note Take that, $PATH!
#   @see https://bit.ly/3BYvjUW
# --------------------------------------------------------------------------

export PATH="$HOME/.composer/vendor/bin:$HOMEBREW_PREFIX/bin:$PATH"
