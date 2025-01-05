const { expect } = require('chai');
const languageAcademy = require('./languageAcademy.js');

describe("Language Academy Tests", function () {
    describe("difficultyLevel", function () {
        it("Returns correct output for a beginner course", function () {
            expect(languageAcademy.difficultyLevel("Beginner")).to.equal("The course is beginner-friendly and focuses on basic concepts like greetings, numbers, and common phrases.");
        });

        it("Returns correct output for an intermediate course", function () {
            expect(languageAcademy.difficultyLevel("Intermediate")).to.equal("The course is moderately challenging and includes grammar rules, sentence structure, and conversational practice.");
        });

        it("Returns correct output for an advanced course", function () {
            expect(languageAcademy.difficultyLevel("Advanced")).to.equal("The course is highly challenging and covers advanced vocabulary, idioms, and specialized topics like business or technical language.");
        });

        it("Returns correct output for an invalid course (string)", function () {
            expect(languageAcademy.difficultyLevel("aa")).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (empty string)", function () {
            expect(languageAcademy.difficultyLevel("")).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (number)", function () {
            expect(languageAcademy.difficultyLevel(1)).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (object)", function () {
            expect(languageAcademy.difficultyLevel({ difficultyLevel: "Beginner" })).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (array)", function () {
            expect(languageAcademy.difficultyLevel(["Beginner"])).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (null)", function () {
            expect(languageAcademy.difficultyLevel(null)).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });

        it("Returns correct output for an invalid course (undefined)", function () {
            expect(languageAcademy.difficultyLevel(undefined)).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });
    });

    describe("discountByNumber", function () {
        it("Returns correct output for 1 course (0% discount)", function () {
            expect(languageAcademy.discountbyNumber(1, 100)).to.equal("You cannot apply a discount.");
        });
        
        it("Returns correct output for 2 courses (10% discount)", function () {
            expect(languageAcademy.discountbyNumber(2, 100)).to.equal("Discount applied! You saved 10$ on your courses.");
        });
        
        it("Returns correct output for 3 courses (10% discount)", function () {
            expect(languageAcademy.discountbyNumber(3, 100)).to.equal("Discount applied! You saved 10$ on your courses.");
        });
        
        it("Returns correct output for 4 courses (25% discount)", function () {
            expect(languageAcademy.discountbyNumber(4, 100)).to.equal("Discount applied! You saved 25$ on your courses.");
        });
        
        it("Returns correct output for 10 courses (25% discount)", function () {
            expect(languageAcademy.discountbyNumber(10, 100)).to.equal("Discount applied! You saved 25$ on your courses.");
        });
        
        it("Returns correct output for 0 courses (0% discount)", function () {
            expect(languageAcademy.discountbyNumber(0, 100)).to.equal("You cannot apply a discount.");
        });
        
        it("Returns correct output for -1 courses (0% discount)", function () {
            expect(languageAcademy.discountbyNumber(-1, 100)).to.equal("You cannot apply a discount.");
        });
        
        it("Returns correct output for total price 0", function () {
            expect(languageAcademy.discountbyNumber(2, 0)).to.equal("Discount applied! You saved 0$ on your courses.");
        });
        
        it("Returns correct output for total price -100", function () {
            expect(languageAcademy.discountbyNumber(2, -100)).to.equal("Discount applied! You saved -10$ on your courses.");
        });
        
        it("Throws an error for invalid number of courses (string)", function () {
            expect(() => languageAcademy.discountbyNumber("1", 100)).to.throw("Invalid input.");
        });

        it("Throws an error for invalid number of courses (object)", function () {
            expect(() => languageAcademy.discountbyNumber({ numberOfCourses: 1 }, 100)).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid number of courses (array)", function () {
            expect(() => languageAcademy.discountbyNumber([1], 100)).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid number of courses (null)", function () {
            expect(() => languageAcademy.discountbyNumber(null, 100)).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid number of courses (undefined)", function () {
            expect(() => languageAcademy.discountbyNumber(undefined, 100)).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid total price (string)", function () {
            expect(() => languageAcademy.discountbyNumber(1, "100")).to.throw("Invalid input.");
        });

        it("Throws an error for invalid total price (object)", function () {
            expect(() => languageAcademy.discountbyNumber(1, { totalPrice: 100 })).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid total price (array)", function () {
            expect(() => languageAcademy.discountbyNumber(1, [100])).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid total price (null)", function () {
            expect(() => languageAcademy.discountbyNumber(1, null)).to.throw("Invalid input.");
        });
        
        it("Throws an error for invalid total price (undefined)", function () {
            expect(() => languageAcademy.discountbyNumber(1)).to.throw("Invalid input.");
        });
    });

    describe("additionalResources", function () {
        it("Returns correct output for matching resources", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 },
                { name: "c", price: 30 }
            ];
            const neededResources = ["a", "b"];

            expect(languageAcademy.additionalResources(resourceCatalog, neededResources)).to.equal("Total Cost is 30$.");
        });
        
        it("Returns correct output for one resource", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = ["a"];

            expect(languageAcademy.additionalResources(resourceCatalog, neededResources)).to.equal("Total Cost is 10$.");
        });
        
        it("Returns correct output for one non-matching resource", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = ["a", "c"];

            expect(languageAcademy.additionalResources(resourceCatalog, neededResources)).to.equal("Total Cost is 10$.");
        });
        
        it("Returns correct output for no matching resources", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = ["d"];

            expect(languageAcademy.additionalResources(resourceCatalog, neededResources)).to.equal("Total Cost is 0$.");
        });
        
        it("Throws error for invalid resource catalog (string)", function () {
            const resourceCatalog = '[{ name: "a", price: 10 },{ name: "b", price: 20 }]';
            const neededResources = ["a"];

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid resource catalog (object)", function () {
            const resourceCatalog = { name: "a", price: 10 };
            const neededResources = ["a"];

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid resource catalog (number)", function () {
            const resourceCatalog = 10;
            const neededResources = ["a"];

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid resource catalog (null)", function () {
            const resourceCatalog = null;
            const neededResources = ["a"];

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid resource catalog (undefined)", function () {
            const resourceCatalog = undefined;
            const neededResources = ["a"];

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid needed resources (string)", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = "a, b";

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid needed resources (object)", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = { neededResource: "a" };

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid needed resources (number)", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = 1;

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid needed resources (null)", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = null;

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
        
        it("Throws error for invalid needed resources (undefined)", function () {
            const resourceCatalog = [
                { name: "a", price: 10 },
                { name: "b", price: 20 }
            ];
            const neededResources = undefined;

            expect(() => languageAcademy.additionalResources(resourceCatalog, neededResources)).to.throw("Invalid input.");
        });
    });
});