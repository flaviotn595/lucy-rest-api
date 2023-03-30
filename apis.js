let sayo = process.cwd()

const { download_Url } = require("./database/function");
const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
const hx = require('hxz-api')
var thiccysapi = require('textmaker-thiccy')
var fs = require('fs')
const path = require('path');
const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch
} = require("./database/youtube");

const criador = ["GhostJs"];
// Nome Do Criador

const key = "Ghost"
//apikey Das Api's

resposta = { //MSG DE ERRO NO SERVIDOR
    semkey: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'Apikey Inesistente teste outra ou compra uma com o meu dono! wa.me/81981718175'
    },
    cdtxt: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'ei nao achei nenhum texto na url'
    },
    cdimg: {
        status: false,
        criador: `${criador}`,
        código: 404,
        mensagem: 
        'ei Nao Achei Nenhum Link De Imagem Na Url'
    },
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ ocorreu um erro no servidor, tente novamente mais tarde'
    }
}

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

/////////
//////////////[ API'S DE YOUTUBE ]///////
/////////

router.get('/youtube/playmp3', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(apikey !== key) return res.json(resposta.semkey)
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayAudio(q).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

router.get('/youtube/playmp4', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(apikey !== key) return res.json(resposta.semkey)
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayVideo(q).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

router.get('/youtube/mp3', async(req, res, next) => {
apikey = req.query.apikey;
link = req.query.link
if(apikey !== key) return res.json(resposta.semkey)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP3(link).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

router.get('/youtube/mp4', async(req, res, next) => {
apikey = req.query.apikey;
link = req.query.link
if(apikey !== key) return res.json(resposta.semkey)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP4(link).then((resultado) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

router.get('/youtube/pesquisar', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(apikey !== key) return res.json(resposta.semkey)
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
ytSearch(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

///////////
//////////////[ API'S DE NSFW ]//////////
///////////

router.all('/nsfw/miakhalifa', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/nsfwmia.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/elisa-sanches', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/nsfwelisa.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-masturbation', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/masturbation.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-pussy', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/pussy.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-gif', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/hnt_gifs.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('gif')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-yuri', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('database/yuri.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

///////////
//////////////[ API'S DE DOWNLOADS ]///
///////////

router.get('/download/tiktok2', async(req, res, next) => {
var cdapikey = req.query.apikey;
link = req.query.link
if(!cdapikey) return res.json(resposta.semkey)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um Link De Um Video Valido!"})
hx.ttdownloader(link)
.then(video => { res.json({
  status: true,
  código: 200,
  criador: `${criador}`,
    resultado: video
})})
});

router.all('/download/tiktok', async(req, res, next) => {
cdapikey = req.query.apikey
linkk = req.query.link
if (!linkk) return res.json({ status : false, criador : `criador`, mensagem : "Coloque Um link Valido"})
if(!cdapikey) return res.json(resposta.semkey)
if(cdapikey !== key) return res.sendFile(keyinvalida)
let tiktok_link = (`http://lzmods-api.tk/api/medias-sociais/tiktok_v2?link=${linkk}&apikey=lz`)
let buffer = await getBuffer(tiktok_link)
res.type('mp4')
res.send(buffer)
})

/////////
//////////////[ API'S DE TEXT-PRO ]//////
/////////

router.get('/textpro/marvel', async(req, res, next) => {
apikey = req.query.apikey;
texto1 = req.query.texto1
texto2 = req.query.texto2
if(apikey !== key) return res.json(resposta.semkey)
if (!texto1) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
if (!texto1) return res.json({ status : false, criador : `criador`, mensagem : "Texto 2 Invalido"})
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [texto1, texto2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/halloween', async(req, res, next) => {
apikey = req.query.apikey;
texto = req.query.texto
if(apikey !== key) return res.json(resposta.semkey)
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Texto 1 Invalido"})
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", texto
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

/////////
//////////////[ OUTRAS API'S ]////////////
/////////

router.all('/cekapikey', async(req, res, next) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
res.json({
      status: 'ativo',
      creator: `${criador}`,
      apikey: `${apikey}`,
      message: 'APIKEY ATIVA'
})
})

router.all('/loli', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.json(resposta.semkey)
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.post('/post/body', async (req, res) => {
res.send(req.body)
})

router.all('*', async (req, res) => {
res.status(404).json({
status:404,
error: 'página não encontrada Ou e Inexiste',
endpoint: req.path
})
})

module.exports = router