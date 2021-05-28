bold=$(tput bold)
normal=$(tput sgr0)
${bold}${normal}

asciidoctor --version && echo "Asciidoctor confirmed" || echo "${bold}You must install asciidoctor${normal}"

gem list -i tilt  && echo "tilt confirmed" || echo "${bold}You must install tilt `gem install --user tilt`${normal}"

coderay --version  && echo "coderay confirmed" || echo "${bold}You must install coderay `gem install --user coderay`${normal}"

haml --version  && echo "haml confirmed" || echo "${bold}You must install haml `gem install --user haml`${normal}"


echo If any of the commands above failed, see https://www.npmjs.com/package/@techwriter/pview
