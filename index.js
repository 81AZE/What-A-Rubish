// importing data
const preductions = require('./Data/Text Data/Preduction.json');
const dare = require('./Data/Text Data/dare.json');
const nhie = require('./Data/Text Data/NHIE.json');
const nickname = require('./Data/Text Data/nickname.json');
const topic = require('./Data/Text Data/topic.json');
const truth = require('./Data/Text Data/truth.json');
const word = require('./Data/Text Data/word.json');

// function
function Soothsayer() {
    
    const random_preduction = preductions[Math.floor(Math.random() * preductions.length)];
    return random_preduction;

};

function Dare() {

    const random_dare = dare[Math.floor(Math.random() * dare.length)];
    return random_dare;

};

function NeverHaveIEver() {

    const random_nhie = nhie[Math.floor(Math.random() * nhie.length)];
    return random_nhie;

};

function Nickname() {

    const random_nickname = nickname[Math.floor(Math.random() * nickname.length)];
    return random_nickname;

};

function Topic() {

    const random_topic = topic[Math.floor(Math.random() * topic.length)];
    return random_topic;

};

function Truth() {

    const random_truth = truth[Math.floor(Math.random() * truth.length)];
    return random_truth;

};

function Word() {

    const random_word = word[Math.floor(Math.random() * word.length)];
    return random_word;
    
};

//exporting
module.exports = { Soothsayer, Dare, NeverHaveIEver, Nickname, Topic, Truth, Word };