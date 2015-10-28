import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import Router from './router';
import './ajax_Setup';

import ContactCollection from './contact_collection';

var appElement = $('.app');

var router = new Router(appElement);

router.start();

console.log('Hello, World');
