

function getPeople(url) { 

   const ul = document.querySelector('#sw');
  //const url = 'https://swapi.co/api/people/';
   let prevButton = null;
   let nextButton = null;

   if (!url) {
      url = 'https://swapi.co/api/people/';
   }

   fetch(url)
   .then(
      (response) => {
      if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
            response.status);
         return;
      }

      // Examine the text in the response
      response.json()
      .then(
         (data) => {
            console.log("#1  ",data);
            console.log("#2  ",data.count);
         
         // Stretch #2 Goal
         setupPages(url, data.count);

            data.results.forEach(
            (people) => {
               console.log("people  ",people.name);
               let row = document.createElement('li');
            
               let nameSpan = document.createElement('span');
               nameSpan.textContent = people.name;
            
               row.appendChild(nameSpan); // <li><span> $name </span></li>
               ul.appendChild(row);

            }
         );
               
               //console.log("Previous  ", data.previous);
               //console.log("Next      ", data.next);

         if (data.previous === null) {
            document.querySelector('#prev').setAttribute('disabled', 'disabled');
         } else {
            //console.log("PreviousB  ", data.previous);
            document.querySelector('#prev').removeAttribute('disabled');
            document.querySelector('#prev').onclick = function() {
               while (ul.hasChildNodes()){
                  ul.removeChild(ul.firstChild);
               }
               getPeople(data.previous);
            }
         }

         if (data.next === null) {
            document.querySelector('#next').setAttribute('disabled', 'disabled');
         } else {
            //console.log("NextB     ", data.next);
            document.querySelector('#next').removeAttribute('disabled');
            document.querySelector('#next').onclick = function() {
               while (ul.hasChildNodes()){
                  ul.removeChild(ul.firstChild);
               }
               getPeople(data.next); 
            }
         }
               
               


      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


}
 

function setupPages(url, count) {
   let modPage = count % 10;
   let numPages = parseInt(count / 10);
   let table = document.querySelector('#pages');
   let row = document.createElement('tr');

   if (modPage > 0) numPages += 1;

   console.log("modPage", modPage);
   console.log("numPage", numPages);
   console.log("url    ", url);

   for (let i = 0; i < numPages; i++){
      let pageNum = document.createElement('td');
      let id = 'id="page' + i.toString() + '"';
         console.log("page id  ", id);
      let pageButton = document.createElement('button', 'id');

      //document.querySelector('#page' + i.toString() + '"').onclick = function() {
      //   getPeople(data.next);
     // }
      //pageNum.innerHTML = '<a href=\'https://swapi.co/api/people/
   }


}






