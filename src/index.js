import angular from 'angular';
import angularRoute from 'angular-route';
import indexCtrl from './controller.index.js'
import indexConfig from './config.index.js'

angular.module('app', ['ngRoute'])
    .controller('indexCtrl', indexCtrl)
    .config(indexConfig);

