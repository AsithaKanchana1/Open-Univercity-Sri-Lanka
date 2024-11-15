/**
 * @file AgeCalculatorForElwction.c
 * @author Asitha Kanchana (asitha.contact@gmail.com)
 * @brief This Program Checks user age is greater than 18 and
 *  then print out if he/she is eligible to vote and other features like
 * user input is valid or not   
 * @version 0.1
 * @date 2024-06-21
 * 
 * @copyright Copyright@ASI Solution (c) 2024
 * 
 */
#include <stdio.h>

int main(){
    int age;
    printf("Please Enter Your Age : ");
    scanf("%d",&age);

    if(age>=18){
        printf("You are eligible to Vote");
    }
    else {
        printf("");
        printf("Sorry You Are not eligible to vote");
    }
    return 0;
}
