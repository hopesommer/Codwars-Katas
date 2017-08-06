//Return the number (count) of vowels in the given string.
using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;

        for (int i = 0; i < str.Length; i++)
        {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            {
                vowelCount++;
            }
        }
        return vowelCount;
    }
}
