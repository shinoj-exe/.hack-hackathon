const resultsList = document.getElementById('qsns')
        new URLSearchParams(window.location.search).forEach((value,
        name) => {
            resultsList.append(`${name}: ${value}`)
            resultsList.append(document.createElement('br'))
           
        })
 

