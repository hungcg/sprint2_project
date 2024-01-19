package com.example.be_sprint2.comon;

import java.util.Random;

public class OrderCodeGenerator {

    public static String orderCodeGenerate() {
        StringBuilder newCode = new StringBuilder("CODE-");
        Random random = new Random();
        Integer sixDigitNum = random.nextInt(999999);
        newCode.append(sixDigitNum);
        return newCode.toString();
    }
}