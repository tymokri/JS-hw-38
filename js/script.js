'use strict';

// Варіант з простим масивом елементів:

// ( () => {
//     const generateList = (array) => {
//         let list = document.createElement('ul');
//         for (let i = 0; i < array.length; i += 1) {
//             let item = document.createElement('li');
//             // item.appendChild(document.createTextNode(array[i]));
//             // в елементи 'li' записали текст (елементи масиву)
//             item.innerText = array[i];
//             // в лист записали елементи 'li'
//             list.appendChild(item);
//         }
//         return list;
//     };
//     let arr = [1,2,3];
//     document.body.appendChild(generateList(arr));
// } ) ();

// Варіант складний:

( () => {
    const generateList = (array) => {
        let list = document.createElement('ul');

        for (let i = 0; i < array.length; i += 1) {

            let item = document.createElement('li');

            if(Array.isArray(array[i]) === true ) {
                let arr2 = array[i];

                let list2 = document.createElement('ul'); // тут невірний запис 'ul', як записати в 'li' 'ul' ?
                // // треба не в document записати, а в 'li', через document.querySelector('li'), insertAdjacentHTML() ?
                console.log(list2); // однак тут list2 містить innerHTML: "<li>1.1</li><li>1.2</li><li>1.3</li>"


                for (let j = 0; j < arr2.length; j += 1) {

                    let item2 = document.createElement('li'); //додали ще 3 'li' елементи:
                    // console.log(item2);

                    item2.innerText = arr2[j]; // в елементи 'li' записали текст (елементи масиву)
                    // console.log(item2);

                    list2.appendChild(item2);  // в лист записали елементи 'li' ?
                }

                console.log(list2.innerHTML); // однак тут <li>1.1</li><li>1.2</li><li>1.3</li>
            }

            item.innerText = array[i];  // в елементи 'li' записали текст (елементи масиву)
            list.appendChild(item);  // в лист записали елементи 'li'
        }
        return list;
    };

    let arr = [1, 2, [1.1, 1.2, 1.3], 3];
    document.body.appendChild(generateList(arr));

} ) ();