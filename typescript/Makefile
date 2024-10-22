GOLDEN_MASTER := golden-master.txt
SEED := "xyzzy"

golden_run := GAME_SEED=$(SEED) npm run golden

.PHONY: run test

run: node_modules
	npm run start

test: node_modules $(GOLDEN_MASTER)
	npm test
	$(golden_run) | diff - $(GOLDEN_MASTER)

$(GOLDEN_MASTER): node_modules
	$(golden_run) > $@

node_modules: package.json package-lock.json
	npm install
	@touch $@

clean:
	rm $(GOLDEN_MASTER)

