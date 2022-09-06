'use strict';

( () => {
    const listData = [1, 2, [1.1, 1.2, 1.3], 3];

    const generateList = (data) => {
        const ul = document.createElement('ul');

        for(let i = 0; i < data.length; i += 1) {
            const li = document.createElement('li');

            if(Array.isArray(data[i])) {
                li.append(generateList(data[i]));
            } else {
                li.append(data[i]);
            }
            ul.append(li);
        }
        return ul;
    };

    const ul = generateList(listData);
    document.body.append(ul);
} ) ();