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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("./prisma");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var users, owners, restaurantData, menuData, categoryData, productData, i, user, cart, i, owner, cart, restaurant, menu, j, category, k;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    users = {
                        name: ["Ana Alves", "Bruno Barros"],
                        email: ["ana@gmail.com", "bruno@gmail.com"],
                        image: [
                            "data:image/jpeg;base64,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",
                            "https://citizensketcher.files.wordpress.com/2022/05/thispersondoesnotexist_43-1.jpg",
                        ],
                    };
                    owners = {
                        name: ["Carla Cardoso", "Diego Diboa", "Eduarda Esteves"],
                        email: ["carla@gmail.com", "diego@gmail.com", "eduarda@gmail.com"],
                        image: [
                            "data:image/jpeg;base64,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",
                            "https://live.staticflickr.com/65535/50630706993_00b8c57751_w.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAzgb18_vIMpxe4wYruRH7tFEfH7JB6rwZg&usqp=CAU",
                        ],
                    };
                    restaurantData = {
                        name: ["Aconchego Gastronômico", "Sabor do Vale", "Sushi Place"],
                        location: [
                            "Rua Principal, 123, Cidade Feliz",
                            "Av. das Flores, 789, Vale Encantado",
                            "Avenida Central, 456, Centro",
                        ],
                        schedule: [
                            "Seg-Sáb: 11h-22h, Dom: 12h-20h",
                            "Ter-Sex: 12h-21h, Sáb-Dom: 11h30-22h30",
                            "Seg-Dom: 12h-23h",
                        ],
                        phone: ["11 1234-5678", "12 9876-5432", "99 9999-9999"],
                        description: [
                            "Aconchego Gastronômico oferece uma culinária variada com pratos típicos da região, priorizando ingredientes locais.",
                            "Sabor do Vale serve pratos caseiros com sabores tradicionais da culinária regional, feitos com ingredientes frescos.",
                            "Sushi Place oferece uma grande variedade de sushi fresco e pratos japoneses autênticos.",
                        ],
                        contacts: [
                            "contato@aconchegogastronomico.com.br, @aconchegorest",
                            "contato@sabordovale.com.br, @sabordovale",
                            "contato@sushiplacerestaurante.com, @sushiplace",
                        ],
                    };
                    menuData = {
                        name: [
                            "Cardápio Principal - Aconchego Gastronômico",
                            "Cardápio Principal - Sabor do Vale",
                            "Cardápio Principal - Sushi Place",
                        ],
                    };
                    categoryData = {
                        name: [
                            ["Entradas", "Principais"],
                            ["Saladas", "Pratos Principais"],
                            ["Sashimi", "Sushi Rolls"],
                        ],
                    };
                    productData = {
                        name: [
                            [
                                [
                                    "Bruschetta de Tomate",
                                    "Carpaccio de Abobrinha",
                                    "Camarão Grelhado",
                                    "Cogumelos Recheados",
                                    "Bruschetta de Abacate",
                                    "Salada de Frutas",
                                    "Camarão Empanado",
                                    "Folhado de Cogumelos",
                                ],
                                [
                                    "Risoto de Frutos do Mar",
                                    "Filé à Parmegiana",
                                    "Salmão ao Molho de Maracujá",
                                    "Tiramisù",
                                    "Risoto de Legumes",
                                    "Filé Mignon ao Molho de Vinho",
                                    "Truta Grelhada",
                                    "Cheesecake de Frutas Vermelhas",
                                ],
                            ],
                            [
                                [
                                    "Salada Caprese",
                                    "Salada de Quinoa",
                                    "Frango Grelhado com Legumes",
                                    "Espaguete ao Pesto",
                                    "Salada Waldorf",
                                    "Tabule",
                                    "Frango à Cordon Bleu",
                                    "Nhoque ao Molho Funghi",
                                ],
                                [
                                    "Bife à Milanesa",
                                    "Lasanha de Berinjela",
                                    "Risoto de Aspargos",
                                    "Pudim de Leite",
                                    "Costelinha de Porco BBQ",
                                    "Canelone de Ricota e Espinafre",
                                    "Arroz Negro com Amêndoas",
                                    "Mousse de Chocolate",
                                ],
                            ],
                            [
                                [
                                    "Sashimi Salmão",
                                    "Sashimi Atum",
                                    "Sashimi Polvo",
                                    "Sushi Roll Filadélfia",
                                    "Sashimi de Peixe Branco",
                                    "Sashimi de Vieira",
                                    "Sashimi de Lula",
                                    "Sushi Roll Tropical",
                                ],
                                [
                                    "Sushi Roll Califórnia",
                                    "Sushi Roll Tempura",
                                    "Sushi Roll Vegano",
                                    "Sashimi Mix",
                                    "Sushi Roll Spicy Tuna",
                                    "Sushi Roll de Tempurá de Camarão",
                                    "Sushi Roll de Abóbora",
                                    "Mix de Sushi Vegetariano",
                                ],
                            ],
                        ],
                        ingredients: [
                            [
                                [
                                    "Tomate, manjericão, pão italiano",
                                    "Abobrinha, queijo parmesão, azeite",
                                    "Camarão, alho, limão",
                                    "Cogumelos, queijo cremoso, ervas",
                                    "Abacate, pão integral, tomate",
                                    "Frutas variadas, alface, mel",
                                    "Camarão, farinha de rosca, óleo",
                                    "Cogumelos, massa folhada, queijo",
                                ],
                                [
                                    "Arroz arbóreo, frutos do mar, tomate",
                                    "Filé, queijo, molho de tomate",
                                    "Salmão, maracujá, batata",
                                    "Biscoitos, café, queijo mascarpone",
                                    "Arroz arbóreo, legumes, caldo de legumes",
                                    "Filé mignon, vinho tinto, ervas",
                                    "Truta, limão, azeite",
                                    "Biscoitos, cream cheese, frutas vermelhas",
                                ],
                            ],
                            [
                                [
                                    "Mozzarella, tomate, manjericão",
                                    "Quinoa, tomate, pepino",
                                    "Frango, abobrinha, pimentão",
                                    "Macarrão, manjericão, nozes",
                                    "Maçã, aipo, nozes",
                                    "Trigo para quibe, salsa, tomate",
                                    "Frango, presunto, queijo",
                                    "Nhoque, cogumelos, creme de leite",
                                ],
                                [
                                    "Carne, queijo, molho de tomate",
                                    "Berinjela, queijo, molho branco",
                                    "Arroz, aspargos, parmesão",
                                    "Leite, açúcar, baunilha",
                                    "Costelinha de porco, molho barbecue, temperos",
                                    "Massa de canelone, ricota, espinafre",
                                    "Arroz negro, amêndoas, especiarias",
                                    "Chocolate, creme de leite, açúcar",
                                ],
                            ],
                            [
                                [
                                    "Salmão fresco",
                                    "Atum fresco",
                                    "Polvo fresco",
                                    "Cream cheese, salmão fresco, pepino",
                                    "Peixe branco fresco",
                                    "Vieira fresca",
                                    "Lula fresca",
                                    "Manga, pepino, cream cheese",
                                ],
                                [
                                    "Kani, abacate, pepino",
                                    "Tempurá, cream cheese, pepino",
                                    "Vegetais frescos, arroz, alga",
                                    "Mix de sashimi variados",
                                    "Atum picante fresco",
                                    "Camarão empanado, cream cheese, pepino",
                                    "Abóbora fresca, arroz, alga",
                                    "Diversos vegetais frescos",
                                ],
                            ],
                        ],
                        price: [
                            [
                                [10.99, 8.5, 15.25, 12.0, 9.99, 7.0, 18.0, 14.5],
                                [22.0, 28.5, 30.0, 9.5, 18.75, 35.0, 25.5, 12.99],
                            ],
                            [
                                [16.0, 14.75, 20.0, 11.25, 13.99, 10.0, 17.0, 19.5],
                                [26.5, 24.0, 21.5, 8.0, 15.0, 28.0, 23.25, 11.0],
                            ],
                            [
                                [9.0, 9.75, 14.0, 18.5, 11.0, 20.0, 16.75, 22.99],
                                [14.5, 16.0, 19.99, 27.5, 18.0, 24.75, 21.0, 25.0],
                            ],
                        ],
                        description: [
                            [
                                [
                                    "Deliciosa bruschetta de tomate fresco sobre pão crocante",
                                    "Finas fatias de abobrinha temperadas",
                                    "Camarão grelhado com toque de limão",
                                    "Cogumelos recheados com queijo cremoso",
                                    "Deliciosa bruschetta de abacate sobre pão integral",
                                    "Refrescante salada de frutas com mel",
                                    "Camarão crocante empanado",
                                    "Folhado recheado com cogumelos e queijo",
                                ],
                                [
                                    "Risoto de frutos do mar com toque de tomate",
                                    "Filé à parmegiana com molho de queijo",
                                    "Salmão ao molho de maracujá com batatas",
                                    "Clássico tiramisù italiano",
                                    "Risoto de legumes frescos",
                                    "Terno filé mignon ao molho encorpado de vinho",
                                    "Truta grelhada com suave toque de limão",
                                    "Cheesecake de frutas vermelhas para adoçar o paladar",
                                ],
                            ],
                            [
                                [
                                    "Salada caprese tradicional",
                                    "Salada de quinoa com vegetais frescos",
                                    "Frango grelhado com legumes coloridos",
                                    "Espaguete ao pesto de manjericão",
                                    "Salada Waldorf tradicional",
                                    "Clássico tabule com temperos",
                                    "Frango recheado à moda cordon bleu",
                                    "Nhoque coberto por molho funghi",
                                ],
                                [
                                    "Bife à milanesa com molho de tomate",
                                    "Lasanha de berinjela com queijo",
                                    "Risoto de aspargos e queijo parmesão",
                                    "Pudim de leite cremoso",
                                    "Costelinha de porco no molho barbecue",
                                    "Canelone de ricota e espinafre gratinado",
                                    "Arroz negro crocante com amêndoas",
                                    "Mousse de chocolate cremoso",
                                ],
                            ],
                            [
                                [
                                    "Sashimi fresco de salmão",
                                    "Sashimi fresco de atum",
                                    "Sashimi fresco de polvo",
                                    "Sushi Roll com cream cheese e salmão fresco",
                                    "Sashimi fresco de peixe branco",
                                    "Sashimi fresco de vieira",
                                    "Sashimi fresco de lula",
                                    "Sushi Roll tropical com manga e cream cheese",
                                ],
                                [
                                    "Sushi Roll com kani e abacate",
                                    "Sushi Roll com tempurá e cream cheese",
                                    "Sushi Roll vegano com vegetais frescos",
                                    "Mix variado de sashimi fresco",
                                    "Sushi Roll de atum picante",
                                    "Sushi Roll com tempurá de camarão",
                                    "Sushi Roll de abóbora fresca",
                                    "Mix de sushi vegetariano fresco",
                                ],
                            ],
                        ],
                        discount: [
                            [
                                [10, 0, 15, 0, 0, 0, 20, 0],
                                [0, 5, 0, 0, 10, 0, 15, 0],
                            ],
                            [
                                [0, 0, 10, 0, 0, 8, 0, 12],
                                [0, 0, 0, 20, 0, 0, 5, 0],
                            ],
                            [
                                [5, 0, 0, 0, 0, 0, 0, 0],
                                [0, 0, 15, 0, 8, 0, 0, 10],
                            ],
                        ],
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                name: users.name[i],
                                email: users.email[i],
                                image: users.image[i],
                                password: "123",
                            },
                        })];
                case 2:
                    user = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.cart.create({
                            data: {
                                userId: user.id,
                            },
                        })];
                case 3:
                    cart = _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < 3)) return [3 /*break*/, 18];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
                            data: {
                                name: owners.name[i],
                                email: owners.email[i],
                                image: owners.image[i],
                                password: "123",
                                isOwner: true,
                            },
                        })];
                case 7:
                    owner = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.cart.create({
                            data: {
                                userId: owner.id,
                            },
                        })];
                case 8:
                    cart = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.restaurant.create({
                            data: {
                                name: restaurantData.name[i],
                                location: restaurantData.location[i],
                                schedule: restaurantData.schedule[i],
                                phone: restaurantData.phone[i],
                                description: restaurantData.description[i],
                                contacts: restaurantData.contacts[i],
                                ownerEmail: owner.email,
                            },
                        })];
                case 9:
                    restaurant = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.menu.create({
                            data: {
                                restaurantId: restaurant.id,
                                name: menuData.name[i],
                            },
                        })];
                case 10:
                    menu = _a.sent();
                    j = 0;
                    _a.label = 11;
                case 11:
                    if (!(j < 2)) return [3 /*break*/, 17];
                    return [4 /*yield*/, prisma_1.prisma.category.create({
                            data: {
                                menuId: menu.id,
                                name: categoryData.name[i][j],
                            },
                        })];
                case 12:
                    category = _a.sent();
                    k = 0;
                    _a.label = 13;
                case 13:
                    if (!(k < 8)) return [3 /*break*/, 16];
                    return [4 /*yield*/, prisma_1.prisma.product.create({
                            data: {
                                categoryId: category.id,
                                name: productData.name[i][j][k],
                                ingredients: productData.ingredients[i][j][k],
                                price: productData.price[i][j][k],
                                description: productData.description[i][j][k],
                                discount: productData.discount[i][j][k],
                                image: "",
                            },
                        })];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    k++;
                    return [3 /*break*/, 13];
                case 16:
                    j++;
                    return [3 /*break*/, 11];
                case 17:
                    i++;
                    return [3 /*break*/, 6];
                case 18:
                    console.log("Seed completed successfully");
                    return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (e) {
    console.error(e);
    process.exit(1);
});
