// Type definitions for @ember-data/model 3.16
// Project: https://github.com/emberjs/data
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Krystan HuffMenne <https://github.com/gitKrystan>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import DS from 'ember-data';
export default DS.Model;

export import attr = DS.attr;
export import belongsTo = DS.belongsTo;
export import hasMany = DS.hasMany;
export import AsyncBelongsTo = DS.AsyncBelongsTo;
export import AsyncHasMany = DS.AsyncHasMany;
export import SyncHasMany = DS.SyncHasMany;
