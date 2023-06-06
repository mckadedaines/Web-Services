const mckadeRoute = (req, res) => {
    res.send('Mckade Daines');
};

const kennaRoute = (req, res) => {
    res.send('Kenna Daines');
};

const spencerRoute = (req, res) => {
    res.send('Spencer Daines');
};


module.exports = {
    mckadeRoute,
    kennaRoute,
    spencerRoute
};
