'use strict';
const express = require('express');
const controller = require('../controller/user.controller');
const router = express.Router();

// middleware


// 유저 추가
router.post('/', controller.addUser);

// 유저 전체 목록 가져오기
router.get('/list', controller.getUsers);

// 특정 유저 데이터 가져오기
router.get('/:id', controller.getAUser);

// 특정 유저 삭제하기
router.delete('/:id', controller.deleteUser);

// 특정 유저 데이터 중 하나의 요소만 업데이트
router.put('/:id', controller.putUser);

// 전체 유저 데이터 중 2개 이상의  요소 업데이트
router.patch('/:id', controller.patchUser);

module.exports = router;
