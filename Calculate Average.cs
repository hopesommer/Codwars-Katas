//Write function avg which calculates average of numbers in given list.

class AverageSolution
{
    public static double FindAverage(double[] array)
    {
        double total = 0;
        double average = 0;
        for (int i = 0; i < array.Length; i++)
        {

            total += array[i];
            average = total / array.Length;
        }
        return average;
    }

}