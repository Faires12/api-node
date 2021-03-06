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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = __importDefault(require("../models/Note"));
class NoteServices {
    createNote(title, content, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNote = new Note_1.default({
                    title,
                    content,
                    user: userID
                });
                yield newNote.save();
            }
            catch (error) {
                throw Error("Erro interno");
            }
        });
    }
    getUserNotes(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield Note_1.default.find({ user: userID });
                return notes;
            }
            catch (error) {
                throw Error("Erro interno");
            }
        });
    }
}
exports.default = new NoteServices();
