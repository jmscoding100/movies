class Movies{

    constructor(){
        this.data = [
            {
                id: 'dy001',
                title: 'the lion king',
                genre:['animation', 'adventure', 'family', 'musical', 'drama'],
                yearMade:new Date('June 5, 1994'),
                directors: ['roger allers', 'rob minkoff'],
                network: 'disney',
            },
            {
                id: 'p001',
                title: 'wall-e',
                genre:['animation', 'adventure', 'family', 'sci-fi'],
                yearMade:new Date('June 27, 2008'),
                directors: 'andrew stanton',
                network:'pixar',
            },
            {
                id: 'p002',
                title: 'up',
                genre:['animation', 'adventure', 'family', 'drama'],
                yearMade:new Date('May 29, 2009'),
                directors: ['pete doctor', 'bob peterson'],
                network:'pixar',
            },
            {
                id: 'dy002',
                title: 'the hunchback of notre dame',
                genre:['animation', 'romance', 'family', 'musical', 'drama'],
                yearMade:new Date('June 21, 1996'),
                directors: ['gary trousdale', 'kirk wise'],
                network:'disney',
            },
            {
                id: 'dy003',
                title: 'tarzan',
                genre:['animation', 'adventure', 'family', 'musical', 'comedy'],
                yearMade:new Date('Jund `5, 1994'),
                directors: ['chris buck', 'kevin lima'],
                network:'disney',
            },
            {
                id: 'p003',
                title: 'the incredibles',
                genre:['animation', 'adventure', 'family', 'action'],
                yearMade:new Date('October 24, 2004'),
                directors: 'brad bird',
                network:'pixar',
            },
            {
                id: 'dr001',
                title: 'puss in boots: the last wish',
                genre:['animation', 'adventure', 'action', 'comedy', 'fantasy'],
                yearMade:new Date('December 21, 2022'),
                directors: ['joel carwford', 'januel mercado'],
                network:'dreamworks',
            },
            {
                id: 'dr002',
                title: 'how to train your dragon',
                genre:['animation', 'adventure', 'family', 'action',],
                yearMade:new Date('March 21, 2010'),
                directors: ['dean deblois', 'chris sanders'],
                network:'dreamworks',
                isFavorite:false
            },
            {
                id: 'dr003',
                title: 'shrek',
                genre:['animation', 'adventure', 'family', 'comedy', 'romance'],
                yearMade:new Date('April 22, 2001'),
                directors: ['roger allers', 'rob minkoff'],
                network:'dreamworks',
            },
            // finish the last three
            {
                id: 'wb001',
                title: 'the iron giant',
                genre:['animation', 'adventure', 'sci-fi', 'action', 'drama'],
                yearMade:new Date('July 31, 1999'),
                directors: 'brad bird',
                network:'warner bro',
            },
            {
                id: 'wb002',
                title: 'osmosis jones',
                genre:['animation', 'adventure', 'action', 'sci-fi', 'comedy'],
                yearMade:new Date('August 7, 2001'),
                directors: ['bobby farrelly', 'peter farrelly'],
                network:'warner bro',
            },
            {
                id: 'wb003',
                title: 'happy feet',
                genre:['animation', 'adventure', 'family', 'musical', 'romance'],
                yearMade:new Date('November 17, 2006'),
                directors: ['george miller', 'warren coleman', 'judy morris'],
                network:'warner bro',
            },
        ]
        this.row = document.getElementById('row')
    }

    // initializer
    init(){
        this.loadCards(this.data)
    }

// buildCard
    buildCard(obj){
        const row = this.row
        

        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')
        card.setAttribute('id', `card-${obj.id}`)

        card.innerHTML = `
            <header class="card-header">
                <h2 class="card-heading text-capitalize">${obj.title}</h2>
            </header>
            <section class="card-body">
            <p class="card-text">
            <span>${obj.yearMade.toDateString()}</span>
            </p>

            <p class="card-text text-capitalize">${obj.network}</p>
            <p class="card-text text-capitalize">${obj.directors}</p>
            </section>
            <footer class="card-footer">
            </footer>

        `

        column.appendChild(card)
        row.appendChild(column)
    }

    //loadCards
    loadCards(arr){
        this.row.innerHTML = ''
        arr.forEach(item =>this.buildCard(item))
    }


    filter(el){
        const filter = el.getAttribute('data-sort')
        let copy

        if(filter == 'genre'){
            const genre = document.getElementById('genreSelect').value
            copy = this.data.filter(item => Object.values(item.genre).includes(genre))
        } else {
            const network = document.getElementById('networkSelect').value
            copy = this.data.filter(item => item.network == network)
        }
        this.loadCards(copy)
    }
}

const action = new Movies()

action.init()


const genreBtn = document.getElementById('genreBtn')
genreBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    action.filter(genreBtn)
})

