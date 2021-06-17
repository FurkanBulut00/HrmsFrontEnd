import React, { useEffect, useState } from "react";
import JobPositionService from '../Services/jobPositionService';
import WorkTypeService from '../Services/workTypeService';
import WorkStyleService from '../Services/workStyleService';
import CityService from '../Services/cityService';
import JobAdvertService from '../Services/jobAdvertService';
import {useFormik} from 'formik'
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Form, Grid } from "semantic-ui-react";

export default function JobAdvertRegister() {
    
    const JobPostingAddSchema = Yup.object().shape({
        lastApplyDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
        jobDesription: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workingTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workingStyleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        openPositon: Yup.string().required("Bu alanın doldurulması zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
        cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        salaryMax: Yup.number().min(0,"0 Dan az olamaz").required("Bu alanın doldurulması zorunludur"),
        salaryMin: Yup.number().min(0,"0 Dan az olamaz").required("Bu alanın doldurulması zorunludur")
      });

    const [cities, setCities] = useState([])
    const [jobs, setJobs] = useState([])
    const [workingTypes, setWorkingTypes] = useState([])
    const [workingStyles, setWorkingStyles] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data))
        
        let jobPositionService = new JobPositionService();
        jobPositionService.getAll().then(result => setJobs(result.data.data))
        
        let workTypeService = new WorkTypeService();
        workTypeService.getAll().then(result => setWorkingTypes(result.data.data))

        let workStyleService = new WorkStyleService();
        workStyleService.getAll().then(result => setWorkingStyles(result.data.data))
    }, [])
    
    let jobAdvertService = new JobAdvertService();

    const formik = useFormik({
        initialValues: {
            jobDesription: "",
            salaryMin: "",
            salaryMax: "",
            openPositon: "",
            lastApplyDate: "",
            cityId: "",
            companyId: "",
            workingStyleId: "",
            workingTypeId: "",
            jobId: "",

         

        },
       
        validationSchema: JobPostingAddSchema,

        onSubmit: (values) => {
            values.companyId = 1;
            jobAdvertService.add(values)
         
        },
      });

      const workingStyleOption = workingStyles.map((workingStyle,index)=>({
        key: index,
        text: workingStyle.workingStyleName,
        value: workingStyle.workingStyleId
      }))
    
    
      const workingTypeOption = workingTypes.map((workingType,index)=>({
        key: index,
        text:workingType.workingTypeName,
        value: workingType.workingTypeId
      }))
    
      const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.cityId,
      }));
    
      const jobOption = jobs.map((job, index) => ({
        key: index,
        text: job.jobName,
        value: job.jobId,
      }));
    
      const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
      }
    return (
        <div>
           <Form onSubmit={formik.handleSubmit}>
 
  <Form.Field>
      <b>Şehir</b>
      <Dropdown
        clearable
        item
        placeholder="Seçiniz"
        search
        selection
        onChange={(event, data) =>
          handleChangeSemantic(data.value, "cityId")
        }
        onBlur={formik.onBlur}
        id="cityId"
        value={formik.values.cityId}
        options={cityOption}
        />
        {formik.errors.cityId && formik.touched.cityId && (
          <div className={"ui pointing red basic label"}>
          {formik.errors.cityId}
        </div>
        )}
    </Form.Field>
    
    <Form.Field>
        <b>İş Pozisyonu</b>
      <Dropdown
        clearable
        item
        placeholder="Seçiniz"
        search
        selection
        onChange={(event, data) =>
          handleChangeSemantic(data.value, "jobId")
        }
        onBlur={formik.onBlur}
        id="jobId"
        value={formik.values.jobId}
        options={jobOption}
        />
        {formik.errors.jobId && formik.touched.jobId && (
          <div className={"ui pointing red basic label"}>
          {formik.errors.jobId}
        </div>
        )}
    </Form.Field>

    <Form.Field>
    <b>Çalışma Tipi</b>
    <Dropdown

    
            clearable
            item
            placeholder="Seçiniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "workingTypeId")
            }
            onBlur={formik.onBlur}
            id="workingTypeId"
            value={formik.values.workingTypeId}
            options={workingTypeOption}
          />
          
          
          {formik.errors.workingTypeId && formik.touched.workingTypeId && (
            <div className={"ui pointing red basic label"}>{formik.errors.workingTypeId}</div>
          )}
        </Form.Field>

        <Form.Field>
            <b>Çalışma Şekli</b>
    <Dropdown
            clearable
            item
            placeholder="Seçiniz"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "workingStyleId")
            }
            onBlur={formik.onBlur}
            id="workingStyleId"
            value={formik.values.workingStyleId}
            options={workingStyleOption}
          />
          
          
          {formik.errors.workingStyleId && formik.touched.workingStyleId && (
            <div className={"ui pointing red basic label"}>{formik.errors.workingStyleId}</div>
          )}
        </Form.Field>


        <Form.Field>
          
        <Grid stackable>
            
        <Grid.Column width={8}>
        <b>Minimum Maaş</b>
          <Input
            style={{ width: "100%" }}
            type="number"
            value={formik.values.salaryMin}
            name="salaryMin"  
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </Input>
          {formik.errors.salaryMin && formik.touched.salaryMin && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.salaryMin}
            </div>
          )}
          </Grid.Column>
          <Grid.Column width={8}>
          <b>Maximum Maaş</b>
          <Input
            style={{ width: "100%" }}
            type="number"
            value={formik.values.salaryMax}
            name="salaryMax"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </Input>
          {formik.errors.salaryMax && formik.touched.salaryMax && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.salaryMax}
            </div>
          )}
          </Grid.Column>
          </Grid>
        </Form.Field>

        

        <Form.Field>
        <Grid stackable>
        <Grid.Column width={8}>
        <b>Açık Pozisyon</b>
          <Input
            style={{ width: "100%" }}
            id="openPositon"
            name="openPositon"
            error={Boolean(formik.errors.openPositon)}
            onChange={formik.handleChange}
            value={formik.values.openPositon}
            onBlur={formik.handleBlur}
            type="number"
           
          />
          {formik.errors.openPositon && formik.touched.openPositon && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.openPositon}
            </div>
          )}
          </Grid.Column>
          <Grid.Column width={8}>
              <b>Son Başvuru Tarihi</b>
          <Input
            style={{ width: "100%" }}
            type="date"
            error={Boolean(formik.errors.lastApplyDate)}
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "lastApplyDate")
            }
            value={formik.values.lastApplyDate}
            onBlur={formik.handleBlur}
            name="lastApplyDate"
         
          />
          {formik.errors.lastApplyDate && formik.touched.lastApplyDate && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.lastApplyDate}
            </div>
          )}
          </Grid.Column>
          </Grid>
        </Form.Field>

        <Form.Field>
            <b>Açıklama</b>
          <TextArea
           
            style={{ minHeight: 100 }}
            error={Boolean(formik.errors.jobDesription).toString()}
            value={formik.values.jobDesription}
            name="jobDesription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.jobDesription && formik.touched.jobDesription && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobDesription}
            </div>
          )}

        </Form.Field>
        <Button
          content="Ekle"
          
          
          color="green"
          type="submit"
          style={{ marginLeft: "20px" }}
        />
</Form>
        </div>
    )
}
