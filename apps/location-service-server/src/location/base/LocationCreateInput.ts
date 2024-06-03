/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataPointCreateNestedManyWithoutLocationsInput } from "./DataPointCreateNestedManyWithoutLocationsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LocationCreateInput {
  @ApiProperty({
    required: false,
    type: () => DataPointCreateNestedManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => DataPointCreateNestedManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => DataPointCreateNestedManyWithoutLocationsInput, {
    nullable: true,
  })
  dataPoints?: DataPointCreateNestedManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  latitude?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  longitude?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { LocationCreateInput as LocationCreateInput };
