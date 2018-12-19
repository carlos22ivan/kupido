exports.homePage = (req, res) => {
        res.render('user/index', {visitas: getVisitas()})
}

var visitas = 62

function getVisitas() {
        return ++visitas;
}

exports.reservarPage = (req, res) => {
        res.render('user/reservar', {visitas: getVisitas()})
}

exports.motel1 = (req, res) => {
        res.render('user/motel1', {visitas: getVisitas()})
}

exports.motel2 = (req, res) => {
        res.render('user/motel2', {visitas: getVisitas()})
}

exports.motel3 = (req, res) => {
        res.render('user/motel3', {visitas: getVisitas()})
}
exports.motel4 = (req, res) => {
        res.render('user/motel4', {visitas: getVisitas()})
}