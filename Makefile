SHELL := /bin/bash

.PHONY: help
help:
	@printf "available targets -->\n\n"
	@cat Makefile | grep ".PHONY" | grep -v ".PHONY: _" | sed 's/.PHONY: //g'


.PHONY: zip
zip:
	mkdir -p Assign\ 03
	cp -R ./ngapp/src ./Assign\ 03
	tree Assign\ 03
	zip -9 -r Assign_03.zip Assign\ 03/
	shasum -a 256 Assign_03.zip
	ls -la Assign_03.zip


.PHONY: copy_zip
copy_zip: zip
	cp Assign_03.zip /vagrant
