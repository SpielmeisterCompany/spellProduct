/**
 * @class superkumba.cameraMover
 * @singleton
 */

define(
	'superkumba/cameraMover',
	[
		'spell/functions'
	],
	function(
		_
	) {
		'use strict'
		
		
		
		/**
		 * Creates an instance of the system.
		 *
		 * @constructor
		 * @param {Object} [spell] The spell object.
		 */
		var cameraMover = function( spell ) {
			
		}
		
		cameraMover.prototype = {
			/**
		 	 * Gets called when the system is created.
		 	 *
		 	 * @param {Object} [spell] The spell object.
			 */
			init: function( spell ) {
				
			},
		
			/**
		 	 * Gets called when the system is destroyed.
		 	 *
		 	 * @param {Object} [spell] The spell object.
			 */
			destroy: function( spell ) {
				
			},
		
			/**
		 	 * Gets called when the system is activated.
		 	 *
		 	 * @param {Object} [spell] The spell object.
			 */
			activate: function( spell ) {
				
			},
		
			/**
		 	 * Gets called when the system is deactivated.
		 	 *
		 	 * @param {Object} [spell] The spell object.
			 */
			deactivate: function( spell ) {
				
			},
		
			/**
		 	 * Gets called to trigger the processing of game state.
		 	 *
			 * @param {Object} [spell] The spell object.
			 * @param {Object} [timeInMs] The current time in ms.
			 * @param {Object} [deltaTimeInMs] The elapsed time in ms.
			 */
			process: function( spell, timeInMs, deltaTimeInMs ) {
				var camera = spell.EntityManager.getEntityIdsByName( 'camera' )[0],
				    player = spell.EntityManager.getEntityIdsByName( 'player' )[0]
				    
				    this.transforms[ camera ].translation[ 0 ] = this.transforms[ player ].translation[ 0 ]
				    this.transforms[ camera ].translation[ 1 ] = this.transforms[ player ].translation[ 1 ]
			}
		}
		
		return cameraMover
	}
)
