git clone git@github.com:fbolton/nebel.git ~/nebel || echo "nebel installed"

export PATH=$PATH:~/nebel/bin/nebel
# echo $PATH

FILE=nebel.cfg
if test -f "$FILE"; then
    echo "$FILE exists."
else 
    touch nebel.cfg
    touch nebel.tmp
fi

ls

FILE=nebel.tmp
if test -f "$FILE"; then
    echo "$FILE exists."
    rm nebel.tmp
    rm nebel.cfg        
fi

