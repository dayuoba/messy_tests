#!/usr/bin/env bash

REPEAT=100;

echo "Running without --prof ${REPEAT} times"
for i in `seq ${REPEAT}`; do
	    echo -n "$i "
		    node -e "setTimeout('', 50)";
		done
		echo
		echo "Running with --prof ${REPEAT} times"
		for i in `seq ${REPEAT}`; do
			    echo -n "$i "
				    node --prof -e "setTimeout('', 50)";
				done
