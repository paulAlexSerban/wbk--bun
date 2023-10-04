(() => {
    const generateArray = (length: number) => {
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(Math.random());
        }
        return array;
    };

    const sort = (array: number[]) => {
        array.sort();
        const end = Date.now();
        console.log(`Array sorted in ${end - start}ms`);
    };

    const start = Date.now();
    const randomArray = generateArray(1000000);
    const end = Date.now();
    console.log(`Array generated in ${end - start}ms`);

    console.log('Sorting...');
    sort(randomArray);
})();
