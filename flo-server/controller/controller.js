"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Journey = require('../models/Journey');
var getAllJourneys = function (_req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var journeys, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Journey.find({}, '_id coordinates title coverImg durationInDays')];
                case 1:
                    journeys = _a.sent();
                    res.status(200);
                    res.send(journeys);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var getJourneysById = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var journeyData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Journey.findById(req.params.id)];
                case 1:
                    journeyData = _a.sent();
                    res.status(200);
                    res.send(journeyData);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var addNewNote = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, addNote, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = req.body.note;
                    return [4 /*yield*/, Journey.findByIdAndUpdate(req.params.id, {
                            $push: { notes: [{ note: data }] }
                        }, { returnDocument: 'after' })];
                case 1:
                    addNote = _a.sent();
                    res.status(201);
                    res.send(addNote);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var deleteNoteById = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, journeyId, id, data, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.params, journeyId = _a.journeyId, id = _a.id;
                    console.log(req.params);
                    return [4 /*yield*/, Journey.findByIdAndUpdate(journeyId, {
                            $pull: { notes: { _id: id } }
                        })];
                case 1:
                    data = _b.sent();
                    res.status(204);
                    res.send(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.log(error_4);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var addNewRestaurant = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var restaurant, addRestaurant, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    restaurant = req.body;
                    return [4 /*yield*/, Journey.findByIdAndUpdate(req.params.id, {
                            $push: {
                                restaurants: [restaurant]
                            }
                        }, { returnDocument: 'after' })];
                case 1:
                    addRestaurant = _a.sent();
                    res.status(201);
                    res.send(addRestaurant);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
var deleteRestaurantById = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, journeyId, id, data, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.params, journeyId = _a.journeyId, id = _a.id;
                    return [4 /*yield*/, Journey.findByIdAndUpdate(journeyId, {
                            $pull: { restaurants: { _id: id } }
                        })];
                case 1:
                    data = _b.sent();
                    res.status(204);
                    res.send(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _b.sent();
                    console.log(error_6);
                    res.status(500);
                    res.send('Something went wrong');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
module.exports = {
    getAllJourneys: getAllJourneys,
    getJourneysById: getJourneysById,
    addNewNote: addNewNote,
    deleteNoteById: deleteNoteById,
    addNewRestaurant: addNewRestaurant,
    deleteRestaurantById: deleteRestaurantById
};
