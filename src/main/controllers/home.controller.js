exports.homePage = (req, res) => {
        res.render('user/index', {visitas: getVisitas()})
}

var visitas = 62

function getVisitas() {
        return ++visitas;
}

exports.reservarPage = (req, res) => {
        res.render('user/reservar', {visitas: visitas})
}

exports.motel1 = (req, res) => {
        res.render('user/motel1', {visitas: visitas})
}

exports.motel2 = (req, res) => {
        res.render('user/motel2', {visitas: visitas})
}

exports.motel3 = (req, res) => {
        res.render('user/motel3', {visitas: visitas})
}
exports.motel4 = (req, res) => {
        res.render('user/motel4', {visitas: visitas})
}