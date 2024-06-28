import { assert } from "chai";
import { workforceManagement } from "./workforceManagement.js"

describe("workforceManagement", () => {

    describe("recruitStaff", () => {
      it("input validation", () => {
       assert.throw(() => workforceManagement.recruitStaff("qnka","qnka", 123),`We are not currently hiring for this role.`);
       assert.throw(() => workforceManagement.recruitStaff("qnka",123, 123),`We are not currently hiring for this role.`);
       assert.throw(() => workforceManagement.recruitStaff("qnka",[], 123),`We are not currently hiring for this role.`);
       assert.throw(() => workforceManagement.recruitStaff("qnka",{}, 123),`We are not currently hiring for this role.`);
      });

          it("If the value of the is greater", () => {
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 4),`ivan has been successfully recruited for the role of Developer.`);
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 5),`ivan has been successfully recruited for the role of Developer.`);
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 30),`ivan has been successfully recruited for the role of Developer.`);
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 3),`ivan is not suitable for this role.`)
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 2),`ivan is not suitable for this role.`)
        assert.equal(workforceManagement.recruitStaff("ivan","Developer", 0),`ivan is not suitable for this role.`)
      });
    });

    describe("computeWages", () => {
      it("input validation", () => {
       assert.throw(() => workforceManagement.computeWages("qnka"),"Invalid hours");
       assert.throw(() => workforceManagement.computeWages([]),"Invalid hours");
       assert.throw(() => workforceManagement.computeWages({}),"Invalid hours");
       assert.throw(() => workforceManagement.computeWages(false),"Invalid hours");
       assert.throw(() => workforceManagement.computeWages(-1),"Invalid hours");
      });

          it("work salary", () => {
        assert.equal(workforceManagement.computeWages(5), 90);
        assert.equal(workforceManagement.computeWages(2), 36);
        assert.equal(workforceManagement.computeWages(0), 0);
        assert.equal(workforceManagement.computeWages(1), 18);
        assert.equal(workforceManagement.computeWages(161), 4398);
        assert.equal(workforceManagement.computeWages(160), 2880);
      });

    });

    describe("dismissEmployee", () => {
      it("input validation", () => {
       assert.throw(() => workforceManagement.dismissEmployee("qnka"),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee({},1),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(123,1),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee([],1),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(["stefan","pesho"],"233"),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(["stefan","pesho"],2),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(["stefan","pesho"],-1),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(["stefan","pesho"],[]),"Invalid input");
       assert.throw(() => workforceManagement.dismissEmployee(["stefan","pesho"],{}),"Invalid input");
      });

          it("work salary", () => {
        assert.equal(workforceManagement.dismissEmployee(["stefan","pesho"],1), "stefan");
        assert.equal(workforceManagement.dismissEmployee(["stefan","pesho"],0), "pesho");
        assert.equal(workforceManagement.dismissEmployee(["stefan", "stanka", "strahil", "bobi"],3), `stefan, stanka, strahil` );
      });

    });

  
  
  });