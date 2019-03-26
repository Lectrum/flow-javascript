/* @flow */

/*::
type person = {
    name: string,
    age: number,
    alive: boolean,
  };
*/

const getName = (object /*: person */) /*: string */ => {
    return object.name;
};

getName({
    name:  'Vova',
    age:   '25',
    alive: true,
});
