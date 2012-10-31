/*--------------------------------------------------------------------------+
 This file is part of ARSnova.
 app/models/Feedback.js
 - Beschreibung: Feedback-Model
 - Version:      1.0, 01/05/12
 - Autor(en):    Christian Thomas Weber <christian.t.weber@gmail.com>
 +---------------------------------------------------------------------------+
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or any later version.
 +---------------------------------------------------------------------------+
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 +--------------------------------------------------------------------------*/
ARSnova.models.Feedback = Ext.regModel('Feedback', {
	proxy: restProxy,
	
	getSessionFeedback: function(sessionKeyword, callbacks){
		return this.proxy.getSessionFeedback(sessionKeyword, callbacks);
	},
	
	getUserFeedback: function(sessionKeyword, callbacks){
		return this.proxy.getUserFeedback(sessionKeyword, callbacks);
	},
	
	postFeedback: function(sessionKeyword, feedbackValue, callbacks) {
		return this.proxy.postFeedback(sessionKeyword, feedbackValue, callbacks);
	},
	
	getAverageSessionFeedback: function(sessionKeyword, callbacks){
		return this.proxy.getAverageSessionFeedback(sessionKeyword, callbacks);
	},
	
	countFeedback: function(sessionId, callbacks){
		return this.proxy.countFeedback(sessionId, callbacks);
	},
});