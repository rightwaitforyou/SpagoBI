/** SpagoBI, the Open Source Business Intelligence suite

 * Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0, without the "Incompatible With Secondary Licenses" notice. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/. **/
 
  
 
  

/**
 * 
 * @author Antonella Giachino (antonella.giachino@eng.it)
 */

 Ext.define('Sbi.data.DatasetFieldsModel', {
    extend: 'Ext.data.Model',
//    proxy:{
//    	type : 'rest',
//    	url : Sbi.config.serviceRegistry.getRestServiceUrl({
//    		serviceName : 'dataset/dsTestForAdmin/fields'
//    	}),
//    	reader : {
//    		type : 'json',
//    		root : 'results'
//    	}
//   	},
//   	autoLoad: true,
   	fields: [
	         'id', 
	         'alias', 
	         'colType', 
	         'funct', 
	         'iconCls', 
	         'nature', 
	         'values', 
	         'precision', 
	         'options'
	         ]
}); 