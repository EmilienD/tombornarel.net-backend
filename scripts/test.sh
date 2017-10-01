STATE_ROOT="./storage/state"

# save current state
cp $STATE_ROOT/state.json $STATE_ROOT/stateTemp.json;
# replace current state by empty one
rm $STATE_ROOT/state.json
cp $STATE_ROOT/stateDefault.json $STATE_ROOT/state.json

for TEST_FILE in $(find ./source -name *.test.mjs); do
  node --experimental-modules $TEST_FILE;
done

# restore state
rm $STATE_ROOT/state.json
mv $STATE_ROOT/stateTemp.json $STATE_ROOT/state.json
