const formatFullname = require('../formatFullname');
const expect = require('chai').expect;


describe('formatFullName', () => {
    it('should return error if "fullname" arg length is 0', () => {
        expect(formatFullname()).to.equal('Error')
    });

    it('should return error if "fullname" arg is not a string', () => {
        expect(formatFullname(5)).to.equal('Error');
        expect(formatFullname(false)).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return error if "fullname" arg does not contain firstName or lastName', () => {
        expect(formatFullname('John')).to.equal('Error');
    });

    it('should return error if "fullname" arg contains firstName, lastName and extra value', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
    });

    it('should return proper format name', ()=> {
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('joHN dOE')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
    });
} )