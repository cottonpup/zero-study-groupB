'use strict';

const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

const userList = [];

// 유저 전체 목록 가져오기
router.get('', userController.getUsers);

// 유저 추가
router.post('/:id', userController.addUser);

// 특정 유저 삭제하기
router.delete('/:id', userController.deleteUser);

// 유저 정보 업데이트
router.patch('/:id', userController.updateUser);

module.exports = router;
