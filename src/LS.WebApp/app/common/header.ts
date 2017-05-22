﻿import { Component,ViewEncapsulation,Input,Attribute } from '@angular/core';

@Component({
	selector: 'app-header',
	encapsulation: ViewEncapsulation.None,
	
 templateUrl: 'app/common/header.html',

})
export class HeaderComponent {
	primarycolor: string;
	secondarycolor: string;
	logopath: string;
	style:string
	imageurl: string;
	@Input() brandingmodel: any;
	
	constructor() {
		
	}
	ngOnInit() {
		this.primarycolor = '#d9970e'    //'#' + this.brandingmodel.PrimaryColorHex;
		this.logopath = '';
		this.secondarycolor = '';
		this.style = '<style>th {background-color:' + this.primarycolor +'!important;}.table > thead > tr > td.info, .table > tbody > tr > td.info, .table > tfoot > tr > td.info, .table > thead > tr > th.info, .table > tbody > tr > th.info, .table > tfoot > tr > th.info, .table > thead > tr.info > td, .table > tbody > tr.info > td, .table > tfoot > tr.info > td, .table > thead > tr.info > th, .table > tbody > tr.info > th, .table > tfoot > tr.info > th {	background-color: #CCCCCC;	font-weight: bold}.table-hover > tbody > tr > td.info:hover, .table-hover > tbody > tr > th.info:hover, .table-hover > tbody > tr.info:hover > td, .table-hover > tbody > tr:hover > .info, .table-hover > tbody > tr.info:hover > th {	background-color: #BBBBBB}.header-logo {	display: block;	height: 3em;	background-image: url('+ this.logopath +');	background-repeat: no-repeat;	background-size: contain;	margin: .5em 0}a {	color:' + this.primarycolor +'}.text-link {	color:' + this.primarycolor +'!important;}.admin-link, .admin-link:hover {color:' + this.primarycolor +'!important;}.header-welcome > span > a {color:' + this.primarycolor +'!important;}.bg-primary {background-color: #888888;border: 1px solid #666666;}.bg-info {background-color: #FAFAFA;border: 1px solid #DDDDDD;}.padded {padding: 1%;}.bottomMargin {margin-bottom: 3%}.panel-heading {background-color:'+ this.secondarycolor +'!important;}.panel-heading-teamuser {	padding: 10px 0px;	margin: 0px 0px;border-radius: 5px;	background-color:' + this.primarycolor +';}.active {background-color:{{secondaryColor}}!important;}.navbar-default .navbar-nav  .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {	background-color:' + this.primarycolor +';}.header-menu {height: auto;background-color:' + this.primarycolor +'!important;}/*Global overrides to bootstrap menu*/.navbar-default {background: none;box-shadow: none;}.navbar {	border: 0px;	margin-bottom: 0px}.navbar-collapse {	//padding: 0px;}.navbar-default .navbar-nav > li > a {	color: #F3F3F3}.navbar-brand, .navbar-nav > li > a {text-shadow: 0 1px 0 rgba(0,0,0,.25)}.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {color: #FFFFFF}.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .active > a {background-image: none;}	.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {color: #FFFFFF	}.dropdown-menu {border-top-width: 0px}	.dropdown-menu > li >a:hover, .dropdown-menu > li > a:focus {background-image: none;}.navbar-default .navbar-toggle {	background-color: #EEEEEE}.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {background-color: #FAFAFA	}.dropdown-header {	font-weight: bold;	font-size: 13px;color: #111111;	padding-left: 16px !important;}.navbar-collapse {order-top-width: 0px;	box-shadow: none}.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .active > a {	box-shadow: none}@media (max-width: 767px) {.navbar-default .navbar-nav .open .dropdown-menu > li > a {color: #EEEEEE}		.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {color: #FFFFFF}.dropdown-header {		padding-left: 16px !important;color: #FFFFFF;}	.collapse.navbar-collapse.in {		box-shadow: 0 6px 12px rgba(0,0,0,.175);}	.dropdown-menu .divider {		background-color: #888888}.padded {	padding: 1.5%;}	.bottomMargin {	margin-bottom: 5%	}}/*END BOOTSTRAP OVERRIDE*/.order-field-title {	color: #000 !important;}.order-button-small,.order-button-small:hover,.order-button-mall:focus {	background-color:' + this.primarycolor +'!important;}.order-button,.order-button:hover,.order-button:focus {	background-color:' + this.primarycolor +'!important;}.admin-button,.admin-button:hover,.admin-button:focus {background-color:' + this.primarycolor +'!important;}.alpha-btn {	margin: 2px;font-weight: bold;color: #fff;background-color:{{secondaryColor}};}.alpha-btn:hover {color: #eee;}.searchBox {	border: 1px solid #1f2022;	background-color: #F1F1F1;	padding: 6px;	margin: 5px;}.grayBox {	border: 1px solid #1f2022;background-color: #F1F1F1;	padding: 6px;	margin: 5px;}.searchBox .left {	float: left;}.searchBox .order-button {	margin-top: 5px}.clear {clear: left}.ag-header-container {	background-color:' + this.primarycolor +';	color:#fff;	text-align:left;}.ag-secondary .ag-header-container {	background-color:{{secondaryColor}}!important;}.ag-header-cell-resize {border-right: 1px solid #ddd !important;}.ag-bootstrap .ag-root {	border: 1px solid #ddd !important;}.ag-cell {	padding: 4px !important;}	.ag-cell:focus {outline: auto 5px #ffef11 !important}.ag-cell-no-focus {	border-bottom: 1px solid #ddd !important;	border-right: 1px solid #ddd !important;}.ag-header {	background-color:' + this.primarycolor +'!important;}.ag-secondary .ag-header {	background-color:{{secondaryColor}}!important;}.ag-row-selected {background-color: #AAA !important;}.ag-cell-focus {	border: 1px solid #ffef11 !important}.ag-font-style {	-webkit-user-select: auto !important}.ag-header-cell ag-header-cell-sortable ag-header-cell-sorted-none {	color: #fff;	text-align: left;}.ag-header-icon .ag-sort-ascending-icon .ag-hidden {	color: #fff}.ag-header-icon .ag-sort-descending-icon {	color: #fff}.ag-cell-value {	padding: 5px}.ag-bootstrap .ag-header-cell-label {	text-align: left}.ag-row:hover {	background-color: #fcffb6 !important}</style>';

	
		this.imageurl = '/Content/img/' + this.brandingmodel.CompanyLogoUrl;
		console.log(this.brandingmodel);
	
		
	}
	


	
}