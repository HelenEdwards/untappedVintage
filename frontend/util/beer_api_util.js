export const fetchBeers = () => (
    $.ajax({
        url: 'api/beers',
    })
);

export const fetchBeer = (id) => (
    $.ajax({
        url: `api/beers/${id}`
    })
);

export const createBeer = beer => (
    $.ajax({
        method: 'POST',
        url: 'api/beers',
        data: { beer }


    })
);
export const updateBeer = beer => {
    return (
    $.ajax({
        method: 'PATCH',
        url: `api/beers/${beer.id}`,
        data: { beer },

    }))
};



export const deleteBeer = id => (
    $.ajax({
        url: `/api/beers/${id}/`,
        method: 'DELETE'
    })
)