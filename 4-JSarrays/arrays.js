// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600)) 

    console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
    const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    const regex = new RegExp(/[A]/);
    const specific_names = names.filter((name) => {
      if(regex.test(name))
        return name;
    })

    console.log(names);
    console.log(specific_names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
    const inventorsByBirth = inventors.sort((a, b)=> a.year > b.year ? 1 : -1);

    console.table(inventorsByBirth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
    const total = inventors.reduce((inventor, total)=> {
      return total + (inventor.passed - inventor.year);
    },0);

    console.log(total);

// 5. Sort the inventors by years lived
    const oldest = inventors.sort((a, b)=>{
      return ((a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
    });
    console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    //create an array object of link elements on the wikipedia page
    const links = Array.from(document.querySelectorAll(".mw-category a"));
    //create another array from the above array out of the link elems text content; finally, filter out names that don't contain 'de' in their text.
    const de_search = links.map(link => link.textContent)
                           .filter(streetName => streetName.includes("de"));
    

    // All of the above can be combined into 'one' line of code as follows:
    const concise = Array.from(document.querySelectorAll(".mw-category a"))
                       .map(link => link.textContent)
                       .filter(streetName => streetName.includes("de"));



// 7. sort Exercise
// Sort the long list of people above alphabetically, by their last name
    const ordered_lastname = people.sort((element, next_element)=>{
      const alast = element.split(", ");
      const blast = next_element.split(", ");
      alast < blast ? 1 : -1;
    })
    console.table(ordered_lastname);

// 8. Reduce Exercise
// Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    const instance_count = data.reduce((obj, element)=>{
      if(!obj[element]) obj[element] = 0;
      obj[element]++;
      return obj;
    }, {});

    console.log(instance_count);
    