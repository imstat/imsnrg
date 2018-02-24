---
layout: page
title: NRC 2017 Posters
permalink: /conferences/nrc_abstracts.html
---


### Group 1

__Joseph Antonelli__<br>
_A flexible tensor regression approach to estimating the effect of chemical mixtures on health_<br>
Humans are exposed to a complex mixture of chemicals and pollutants, and estimating the health effects of these mixtures is of crucial importance in environmental epidemiology. It is expected that the different pollutants we are exposed to interact with each other in a complex and nonlinear manner. To estimate the health effects of complex mixtures we use tensor regression, which uses a low-rank tensor decomposition to estimate a complex, nonlinear function using simple, local functions. We also induce sparsity using spike and slab priors on the local functions that make up the tensor factorization. Using the indian buffet process, we let the number of rank-one tensor products required to estimate the health effects of multiple pollutants be unknown. On top of it's flexibility, the proposed approach is interpretable as we can use the posterior samples to identify pollutants that interact with each other, which is of great importance in environmental research. We illustrate our approach's ability to estimate complex functions using simulated data, and apply our method to a study of metal pollutants and their subsequent effect on birth weight.


__Tom Berrett__<br>
_Local nearest neighbour classification with applications to semi-supervised learning_<br>
I will present a new asymptotic expansion for the global excess risk of a local $k$-nearest neighbour classifier, where the choice of $k$ may depend upon the test point.  This expansion elucidates conditions under which the dominant contribution to the excess risk comes from the locus of points at which each class label is equally likely to occur, but we also show that if these conditions are not satisfied, the dominant contribution may arise from the tails of the marginal distribution of the features.  Moreover, we prove that, provided the $d$-dimensional marginal distribution of the features has a finite $\rho$th moment for some $\rho > 4$ (as well as other regularity conditions), a local choice of $k$ can yield a rate of convergence of the excess risk of $O(n^{-4/(d+4)})$, where $n$ is the sample size, whereas for the standard $k$-nearest neighbour classifier, our theory would require $d \geq 5$ and $\rho > 4d/(d-4)$ finite moments to achieve this rate.  Our results motivate a new $k$-nearest neighbour classifier for semi-supervised learning problems, where the unlabelled data are used to obtain an estimate of the marginal feature density, and fewer neighbours are used for classification when this density estimate is small.  The potential improvements over the standard $k$-nearest neighbour classifier are illustrated both through our theory and via a simulation study.


__Bhaswar B. Bhattacharya__<br>
_Power of Graph-Based Two-Sample Tests_<br>
Testing equality of two multivariate distributions is a classical problem for which many non-parametric tests have been proposed over the years. Most of the popular tests are based either on similarity graphs constructed using inter-point distances between the observations (multivariate generalizations of the Wald-Wolfowitz's runs test) or on multivariate data-depth (generalizations of the Mann-Whitney rank test). These tests are known to be asymptotically normal under the null and consistent against all fixed alternatives. 

In this talk, a general framework of graph-based tests will be introduced that includes all these tests. The asymptotic efficiency of a general graph-based test can be derived using  Le Cam's theory of local asymptotic normality, which provides a theoretical basis for comparing the performance of these tests. As a consequence, it will be shown that popular tests based on similarity graphs such as the Friedman-Rafsky test (1979), the test based on the $K$-nearest neighbor graph (1984), the minimum matching test of Rosenbaum (2005), among others have zero asymptotic (Pitman) efficiency against $O(N^{-\frac{1}{2}})$ alternatives. On the other hand, the tests based on multivariate depth functions (the Liu-Singh rank sum statistic (1993)), which include the Tukey depth (1975) and the projection depth (2003), have non-zero asymptotic efficiencies; though they might be computationally expensive when the dimension is large.


__Shih-Kang Chao__<br>
_Distributed inference for quantile regression processes_<br>
The increased availability of massive data sets provides a unique opportunity to discover subtle patterns in their distributions, but also imposes overwhelming computational challenges. To fully utilize the information contained in big data, we propose a two-step procedure: (i) estimate conditional quantile functions at different levels in a parallel computing environment; (ii) construct a conditional quantile regression process through projection based on these estimated quantile curves. Our general quantile regression framework covers both linear models with fixed or growing dimension and series approximation models. We prove that the proposed procedure does not sacrifice any statistical inferential accuracy provided that the number of distributed computing units and quantile levels are chosen properly. In particular, a sharp upper bound for the former and a sharp lower bound for the latter are derived to capture the minimal computational cost from a statistical perspective. As an important application, the statistical inference on conditional distribution functions is considered. Simulations confirm our statistical inferential theory.


__Yang Chen__<br>
_Delineating Protein Transportation Processes: Hierarchical Models for Single-Molecule Data_<br>
To maintain proper cellular functions, over 50% of proteins encoded in the
genome need to be transported to cellular membranes. The molecular mechanism behind such a process, often referred to as protein targeting, is not well understood. Single-molecule experiments are designed to unveil the detailed mechanisms and reveal the functions of different molecular machineries involved in the process. The experimental data consist of hundreds of stochastic time traces from the fluorescence recordings of the experimental
system. We introduce a Bayesian hierarchical model on top of hidden Markov
models (HMMs) to analyze these data and use the statistical results to
answer the biological questions. In addition to resolving the biological
puzzles and delineating the regulating roles of different molecular
complexes, our statistical results enable us to propose a more detailed
mechanism for the late stages of the protein targeting process.


__Yinghan Chen__<br>
_Bayesian Modeling for Learning Trajectories in Cognitive Diagnosis Models_<br>
The increasing presence of electronic and online learning resources presents challenges and opportunities for psychometric techniques that can assist in the measurement of abilities. Cognitive diagnosis models (CDMs) are ideal for tracking many fine-grained skills that comprise a domain, and can assist in carefully navigating through the training and assessment of these skills in e-learning applications. We propose a class of CDMs for modeling changes in attributes, which we refer to as learning trajectories. We focus on the development of Bayesian procedures for estimating parameters of a first-order hidden Markov model. We present an application of the developed model to a spatial rotation experimental intervention.


__Abhi Datta__<br>
_Spatial Disease Mapping using Directed Acyclic Graph Autoregressive (DAGAR) Model_<br>
Hierarchical models for regionally aggregated disease incidence data commonly involve region specific latent random effects which are modelled jointly as having a multivariate Gaussian distribution. The covariance or precision matrix incorporates the spatial dependence between the regions. Common choices for the precision matrix include the widely used intrinsic conditional autoregressive model which is singular, and its nonsingular extension which lacks interpretability. We propose a new parametric model for the precision matrix based on a directed acyclic graph representation of the spatial dependence. Our model guarantees positive definiteness and, hence, in addition to being a valid prior for regional spatially correlated random effects, can also be applied directly to model other dependent multivariate data like images and networks. Theoretical and empirical results demonstrate the interpretability of parameters in our model. Our precision matrix is sparse and the model is highly scalable for large datasets. We also derive a novel order-free version which remedies the dependence of directed acyclic graphs on the ordering of the regions by averaging over all possible orderings. The resulting precision matrix is still sparse and available in closed form. We demonstrate the superior performance of our models over competing models using simulation experiments and a public health application.


__Jyotishka Datta__<br>
_Bayesian Inference for Spatially Clustered, Quasi-sparse Count Data_<br>
In a variety of application areas, there is a growing interest in analyzing high dimensional quasi-sparse count data, with sparsity exhibited by an over-abundance of zeros and small non-zero counts. Applications such as detection of a hotspot for rare mutations on a genome or criminal activities in a region are also characterized by the spatial clustering of the event realizations. We present two different methods that yields flexibility to the nature and level of sparsity in the data, fully incorporate location information, and provide scalability for large scale analysis. The first half of the poster will discuss a flexible, multi-scale nonparametric Bayes method for efficiently estimating the intensity of event realizations for rare variants data and assessing differences between groups. The second half will introduce a new class of continuous local-global shrinkage priors tailored for quasi-sparse counts. We will also demonstrate the performance of these methods to detect rare mutational hotspots in exome sequencing data and to identify cities most impacted by terrorism activities.


__Ethan Fang__<br>
_My Work on Statistics and Optimization_<br>
I will use four figures to briefly mention my works on statistics and optimization, and how they are interacted.


__Irina Gaynanova__<br>
_Structural Learning and Integrative Decomposition of Multi-View Data_<br>
The increased availability of the multi-view data (data on the same samples from multiple sources) has led to strong interest in models based on low-rank matrix factorizations. These models represent each data view via shared and individual components, and have been successfully applied for exploratory dimension reduction, association analysis between the views, and further learning tasks such as consensus clustering. Despite these advances, there remain significant challenges in modeling partially-shared components, and identifying the number of components of each type (shared/partially-shared/individual). In this work, we formulate a novel linked component model that directly incorporates partially-shared structures. We call this model SLIDE for Structural Learning and Integrative DEcomposition of multi-view data. We prove the existence of SLIDE decomposition and explicitly characterize the identifiability conditions. The proposed model fitting and selection techniques allow for joint identification of the number of components of each type, in contrast to existing sequential approaches. In our empirical studies, SLIDE demonstrates excellent performance in both signal estimation and component selection. We further illustrate the methodology on the breast cancer data from The Cancer Genome Atlas repository. This is a joint work with Gen Li.


## Group 2

__Yuwen Gu__<br>
_Ultrahigh-Dimensional Composite Quantile Regression_<br>
Composite quantile regression (CQR) provides efficient estimation of the coefficients in linear models, regardless of the error distributions. We consider penalized CQR for both variable selection and efficient coefficient estimation in a linear model under ultrahigh dimensionality and possibly heavy-tailed error distribution. Both lasso and folded concave penalties are discussed. An L2 risk bound is derived for the lasso estimator to establish its estimation consistency and strong oracle property of the folded concave penalized CQR is shown for a feasible solution via the LLA algorithm. The non-smooth nature of the penalized CQR poses great numerical challenges for high-dimensional data. We provide a unified and effective numerical optimization algorithm for computing penalized CQR via ADMM. We demonstrate the efficiency gain of the penalized CQR estimator over the penalized least squares estimator through simulated data under various error distributions.


__Kory D Johnson__<br>
_Valid Stepwise Regression Using Sequential Testing_<br>
Valid conditional inference has become a topic of increasing concern. Recently, significant research has been focused on how to compute appropriate p-values for inference post model selection. We address a slightly different problem: how can hypothesis testing be validly used to select a model? We want to use hypothesis testing to select one of the models identified by forward stepwise regression. This is a challenging task because the hypotheses being tested are suggested by the data and subsequent tests are only made if previous tests are rejected. Addressing the differences between these two challenges requires increased precision about the quantity of interest when using hypothesis testing for model selection. Our solution uses a sequential testing framework and demonstrates that multiple comparison methods can be adapted to this task. We also provide a flexible and practical algorithm, Revisiting Alpha-Investing (RAI), which yields a fast approximation to forward stepwise, performing model selection in O(nplog(n)) time while controlling the marginal false discovery rate.


__Edward Kennedy__<br>
_Nonparametric causal effects based on incremental propensity score interventions_<br>
Most work in causal inference considers deterministic interventions that set each unit's treatment to some fixed value. However, under positivity violations these interventions can lead to non-identification, inefficiency, and effects with little practical relevance. Further, corresponding effects in longitudinal studies are highly sensitive to the curse of dimensionality, resulting in widespread use of unrealistic parametric models. We propose a novel solution to these problems: incremental interventions that shift propensity score values rather than set treatments to fixed values. Incremental interventions have several crucial advantages. First, they avoid positivity assumptions entirely. Second, they require no parametric assumptions and yet still admit a simple characterization of longitudinal effects, independent of the number of timepoints. For example, they allow longitudinal effects to be visualized with a single curve instead of lists of coefficients. After characterizing these incremental interventions and giving identifying conditions for corresponding effects, we also develop general efficiency theory, propose efficient nonparametric estimators that can attain fast convergence rates even when incorporating flexible machine learning, and propose a bootstrap-based confidence band and simultaneous test of no treatment effect. Finally we explore finite-sample performance via simulation, and apply the methods to study time-varying sociological effects of incarceration on entry into marriage.


__Hyeonju Kim__<br>
_QTL analysis for GxE using a matrix-variate linear mixed model_<br>
We develop a matrix-variate linear mixed model with gene by environment (GxE) interactions that captures correlation between phenotypes across multiple environments.  We consider two variance components in this model expressed as a sum of two Kronecker products accounting for background gene by environment interactions and model errors dynamically. Transforming correlated data to uncorrelated ones by factoring genetic similarity and environmental similarity matrices reduces to a matrix optimization problem for maximum likelihood estimates.  The goal of this study is to detect Quantitative Trait Loci (QTL) pertaining to genetic variation due to environmental effects, in particular, gene by site across a latitudinal gradient in the US for better understanding of the environmental driver in switchgrass data.  We will present the model and discuss possible approaches to estimate covariance matrix for maximum likelihood estimation.


__Dehan Kong__<br>
_Matrix Linear Discriminant Analysis_<br>
We propose a novel linear discriminant analysis approach for the classification of high-dimensional matrix-valued data that commonly arises from imaging studies.  Motivated by the equivalence of the conventional linear discriminant analysis and the ordinary least squares, we consider an efficient nuclear norm penalized regression that encourages a low-rank structure. Theoretical properties including a non-asymptotic risk bound and a rank consistency result are established. Simulation studies and an application to electroencephalography data show the superior performance of the proposed method over the existing approaches.


__Lynn Lin__<br>
_My work on Bayesian Statistics and Its Applications_<br>
I will briefly mention my works on Bayesian statistics, and its applications to the single-cell data analyses.


__Lan Liu__<br>
_Optimal Criteria to Exclude the Surrogate Paradox and Sensitivity Analysis_<br>
When the primary outcome is hard to collect, surrogate endpoint is typically used as a substitute. However, even when the treatment has a positive average causal effect (ACE) on the surrogate endpoint, which also has a positive ACE on the primary outcome, it is still possible that the treatment has a negative ACE on the primary outcome. Such a phenomenon is called the surrogate paradox and greatly challenges the use of surrogate. In this paper, we provide criteria to exclude the surrogate paradox for both the strong, and non-strong surrogates. Our criteria are optimal in the sense that they are sufficient and “almost necessary” to exclude the paradox: if the conditions are satisfied, the surrogate paradox is guaranteed to be absent while if the conditions fail, there exists a data generating process with surrogate paradox that can generate the same observed data. That is, our criteria capture all the information in the observed data to exclude the surrogate paradox rather than relying on unverifiable distributional assumptions.


__Jianxuan Liu__<br>
_An Alternative Robust Estimator of Average Treatment Effect in Causal Inference_<br>
An Alternative Robust Estimator of Average Treatment Effect in Causal Inference

Abstract 
The problem of estimating average treatment effect is of fundamental importance when evaluating the effectiveness of medical treatments or social intervention policies. Most of the existing methods for estimating average treatment effect rely on some parametric assumptions on the propensity score model or outcome regression model one way or the other. In reality, both models are prone to misspecification, which can have undue influence on the estimated average treatment effect. We propose a new robust approach to estimating the average treatment effect based on observational data in the challenging situation when neither a plausible parametric outcome model nor a reliable parametric propensity score model is available. Our estimator can be considered as a robust extension of the popular class of propensity score weighted estimators. The new approach has the advantage of being robust, flexible, data adaptive and it can handle many covariates simultaneously. Adapting a dimension reduction approach, we estimate the propensity score weights semiparametrically by using a nonparametric link function to relate the treatment assignment indicator to a low-dimensional structure of the covariates which are formed typically by several linear combinations of the covariates. We develop a class of consistent estimators for the average treatment effect and study their theoretical properties. We demonstrate the robust performance of the new estimators on simulated data and a real data example of analyzing the effect of maternal smoking on babies' birth weight.


__Shelley Liu__<br>
_Lagged kernel machine regression for identifying time windows of susceptibility to exposures of complex metal mixtures_<br>
The impact of neurotoxic chemical mixtures on children's health is a critical public health concern. It is well known that during early life, toxic exposures may impact cognitive function during critical time intervals of increased vulnerability, known as windows of susceptibility. There are several statistical challenges in estimating the health effects of time-varying exposures to multi-pollutant mixtures, such as: multi-collinearity among the exposures both within time points and across time points, and complex exposure-response relationships. To address these concerns, we develop a flexible statistical method, called lagged kernel machine regression (LKMR). To our knowledge, LKMR is the first statistical method to identify critical exposure windows of chemical mixtures, and account for complex nonlinear and non-additive effects of the mixture at any given exposure window. LKMR estimates how the effects of a mixture of exposures change with the exposure time window using a Bayesian formulation of a grouped, fused lasso penalty within a kernel machine regression framework. A simulation study demonstrates the performance of LKMR under realistic exposure-response scenarios, and demonstrates large gains over approaches that consider each time window separately, particularly when serial correlation among the time-varying exposures is high. We apply LKMR to estimate associations between neurodevelopment and metal mixtures in ELEMENT, a prospective cohort study of child health in Mexico City.


__Xialu Liu__<br>
_Convolutional Autoregressive Models for Functional Time Series_<br>
Functional data analysis has became an increasingly popular class of problems in statistical research. However, functional data observed over time with serial dependence remains a less studied area. Motivated by Bosq (2000), who first introduced the functional autoregressive models, we propose a convolutional functional autoregressive model, where the function at time $t$ is a result of the sum of convolutions of the past functions and a set of convolution functions, plus a noise process, mimicking the vector autoregressive process. It provides an intuitive and direct interpretation of the dynamics of a stochastic process. Instead of principal component analysis commonly used in functional data analysis, we adopt a sieve estimation procedure based on B-spline approximation of the convolution functions. We establish convergence rate of the proposed estimator, and investigate its theoretical properties. The model building, model validation, and prediction procedures are also developed. Both simulated and real data examples are presented.


__Sooie-Hoe Loke__<br>
_Convexity of Ruin Probabilities in Insurance Risk Models_<br>
Conditions for the convexity of compound geometric tails and compound geometric convolution tails are established. The results are then applied to analyze the convexity of the ruin probability and the Laplace transform of the time to ruin in the classical compound Poisson risk model with and without diffusion. An application to an optimization problem is given.

## Group 3

__Abhishek Chakrabortty__<br>
_Surrogate Aided Unsupervised Recovery of Sparse Signals in Single Index Models for Binary Outcomes_<br>
We consider the recovery of regression coefficients, denoted by beta0, for a single index model (SIM) relating a binary outcome Y to a set of possibly high dimensional covariates X, based on a large but unlabeled dataset U. On U, we fully observe X, and additionally a surrogate S which, while not being strongly predictive of Y throughout the entirety of its support, can forecast it with high accuracy when it assumes extreme values. Such datasets arise naturally in modern studies involving large databases such as electronic medical records (EMR) where Y, unlike (X, S), is difficult and/or expensive to obtain. In EMR studies, an example of Y and S would be the true disease phenotype and the count of the associated diagnostic codes respectively. Assuming another SIM for S given X, we show that under sparsity assumptions, we can recover beta0 proportionally by simply fitting a least squares LASSO estimator to the subset of the observed data on (X, S) restricted to the extreme sets of S with Y imputed using the surrogacy of S. We obtain sharp finite sample performance bounds for our estimator, including deterministic deviation bounds and probabilistic guarantees. We demonstrate the effectiveness of our approach through extensive simulations and by application to an EMR study conducted at the Partners HealthCare Systems.

__Qing Mai__<br>
_The fused Kolmogorov filter: a nonparametric model-free screening method_<br>
A new model-free screening method named fused Kolmogorov filter is proposed for high-dimensional data analysis. This new method is fully nonparametric and can work with many types of covariates and response variables, including continuous, discrete and categorical variables. We apply the fused Kolmogorov filter to deal with variable screening problems emerging from a wide range of applications, such as multiclass classification, nonparametric regression and Poisson regression, among others. It is shown that the fused Kolmogorov filter enjoys the sure screening property under weak regularity conditions that are much milder than those required for many existing nonparametric screening methods. 
In particular,  the fused Kolmogorov filter can still be powerful when covariates are strongly dependent of each other. We further demonstrate the superior performance of the fused Kolmogorov filter over existing screening methods by simulations and real data examples.


__Himel Mallick__<br>
_Zero-inflated Models for Genetic Association Studies_<br>
Count data are increasingly ubiquitous in genetic association studies, where it is possible to observe excess zero counts as compared to what is expected based on standard assumptions. For instance, in rheumatology, data are usually collected in multiple joints within a person or multiple sub-regions of a joint, and it is not uncommon that the phenotypes contain enormous number of zeroes due to the presence of excessive zero counts in majority of patients. However, little is known about their implications in genetic association studies. In this study, we have investigated the performance of several state-of-the-art approaches for handling zero-inflated count data along with a novel penalized regression approach with an adaptive LASSO penalty, by simulating data under a variety of disease models and linkage disequilibrium patterns. By taking into account data-adaptive weights in the estimation procedure, the proposed method provides greater flexibility in multi-SNP modeling of zero-inflated count phenotypes. A fast coordinate descent algorithm nested within an EM (expectation-maximization) algorithm is implemented for estimating the model parameters and conducting variable selection simultaneously. Results show that the proposed method has optimal performance in the presence of multicollinearity, as measured by both prediction accuracy and empirical power, which is especially apparent as the sample size increases. Moreover, the Type I error rates become more or less uncontrollable for the competing methods when a model is misspecified, a phenomenon routinely encountered in practice.


__Elizabeth J. McGuffey__<br>
_Pathway-based Integrative Bayesian Analysis of Multiplatform Genomics Data_<br>
The identification of gene pathways involved in cancer development and progression and the characterization of their activity in terms of multiplatform genomics can provide information leading to discovery of new targeted medications.  We propose a two-step model that integrates multiple genomic platforms, as well as gene pathway membership information, to efficiently and simultaneously (1) identify the genes significantly related to a clinical outcome, (2) identify the genomic platform(s) regulating each important gene, and (3) rank the pathways by importance to the clinical outcome.  We utilize a hierarchical Bayesian model with multiple levels of shrinkage priors to achieve efficient estimation, and our integrative framework allows us not only to identify the important pathways and the important genes within pathways, but also to gain insight as to the platform(s) driving the effects mechanistically. We apply our method to a subset of The Cancer Genome Atlas' publicly available glioblastoma multiforme data set and identify potential targets for future cancer therapies.


__Katherine McLaughlin__<br>
_Modeling Preferential Recruitment for Respondent-Driven Sampling_<br>
Respondent-driven sampling (RDS) is a network sampling methodology used worldwide to sample key populations at high risk for HIV/AIDS who often practice stigmatized/illegal behaviors and are not typically reachable by conventional sampling techniques. In RDS, study participants recruit their peers to enroll, resulting in an unknown sampling mechanism. I develop a two-sided preferential recruitment model for the sampling mechanism in a rational-choice framework, which allows generative probabilistic models to be created. The models can incorporate observable characteristics of the population and network, have interpretable parameters, and result in first- and second-order RDS inclusion probabilities. Inference can be made about recruitment preferences by maximizing the likelihood of the observed recruitment chain given the observed covariates. Implementation is via a Bayesian framework where the posterior distribution of the preference coefficients is approximated using a constrained Metropolis-Hastings algorithm.


__Amanda Mejia__<br>
_A Bayesian GLM Approach to  Cortical Surface fMRI Data Analysis_<br>
Cortical surface fMRI (cs-fMRI) has recently grown in popularity versus traditional volumetric fMRI, as it allows for more meaningful spatial smoothing and is more compatible with the common assumptions of isotropy and stationarity in Bayesian spatial models.  However, as no Bayesian spatial model has been proposed for cs-fMRI data, most analyses continue to employ the classical, voxel-wise general linear model (GLM). Here, we propose a Bayesian GLM for cs-fMRI, which employs a class of sophisticated spatial processes to flexibly model latent activation fields.  We use integrated nested Laplacian approximation (INLA), a highly accurate and efficient Bayesian computation technique.  To identify regions of activation, we propose an excursions set method based on the joint posterior distribution of the latent fields, which eliminates the need for multiple comparisons correction.  Finally, we address a gap in the existing literature by proposing a novel Bayesian approach for multi-subject analysis.  The methods are validated and compared to the classical GLM through simulation studies and a motor task fMRI study from the Human Connectome Project.  The proposed Bayesian approach results in smoother activation estimates, more accurate false positive control, and increased power to detect truly active regions.


__Caleb Miles__<br>
_Causal Inference for a Single Group of Causally-Connected Units Under Stratified Interference_<br>
The assumption that no subject's exposure affects another subject's outcome, known as the no interference assumption, has long held a foundational position in the study of causal inference. However, this assumption may be violated in many settings, and in recent years has been relaxed considerably. Often this has been achieved with the aid of knowledge of an underlying network, or the assumption that the population can be partitioned into separate groups, between which there is no interference. In this paper, we consider a setting in which we can rely on neither of these, as each subject affects every other subject. In particular, we consider settings in which the stratified interference assumption is reasonable for the entire sample, i.e., a subject's outcome is affected by all other subjects' exposures, but only via the total number of subjects exposed. This can occur when the exposure is a shared resource whose quality depends on the number of subjects among whom it is shared. We present a doubly-robust estimator that allows for incorporation of machine learning, and tools for inference for a class of causal parameters that include direct effects and overall effects under certain interventions. We conduct a simulation study, and present results from a data application where we study the effect of shifting care tasks of low-risk HIV patients from physicians to nurses in Kenyan health clinics.


__Jeff Miller__<br>
_Cancer phylogenetic inference_<br>
As it progresses within a patient, cancer evolves into multiple subpopulations of cancer cells, some co-located and some at distant sites. Genome sequencing of cancer tissue has great promise for understanding how cancers develop and for personalized treatment, however, in bulk sequencing, the observations come from an admixture of multiple subpopulations as well as normal cells. The problem of inferring the mutational profiles of the distinct subpopulations and their phylogenetic relationships can be formulated as a tree-structured clustering problem in which the number of clusters and the tree topology are unknown. We are developing a novel method of inference for this problem that is advantageous in terms of computation and accuracy.


__Jessica Minnier__<br>
_Automated Feature Selection for Prediction with Electronic Medical Records Data_<br>
The use of electronic medical records (EMR) for research is challenging due to imprecise coding practices and free form text fields. Natural language processing (NLP) methods can extract features from text but selecting informative features is not trivial. Furthermore, imprecise billing codes can lead to mismeasurement of disease outcomes. Often experts must manually review a subset of records to obtain a gold standard phenotype label. Models built on this data have limited prediction accuracy due to a high dimension of predictors and small sample size. We present an automated feature selection method that utilizes model-based clustering and regularized regression to build a prediction model with surrogate outcomes from EMR data, such as diagnosis codes and mentions of disease in text fields. Our method performs variable selection of NLP features and maintains high prediction accuracy even when labeled training data are unavailable. Our automated feature selection method minimizes the requirement of gold standard labels for algorithm training, thereby improving automated prediction and phenotyping efficiency.


__Jiyoun Myung__<br>
_Robust Small Area Estimation with Student’s t Random Effects_<br>
The classic area level small area estimation model assumes normality of random effects. However, this is typically an unverifiable assumption, which often can be sensitive to outliers. We propose an alternate model with t-priors for random effects. A full Bayesian analysis is performed with non-subjective priors for parameters of the Student's t-distribution. The robustness of such models in comparison with the classical Fay-Herriot model is shown via simulation as well as analysis of a real data set.

For the further study, we consider small area estimation problems where we have additional data to model the variance of the error term in the area level model. A typical small area model assumes the variance of the error term is known in order to avoid non-identifiability.  The assumptions of known variance almost become mandatory for secondary users of survey data who do not have access to any micro data for estimation of the variance. In reality, however, the variance is random based on sampled data. Thus, in situations when one has additional data to estimate the variance, they can be used efficiently for modeling the variance.


__Daniel Nevo__<br>
_The adaptive "learn-as-you-go" design for multi-stage intervention studies_<br>
Large-scale intervention studies in public health often have a  "learn-as-you-go'' feature. While the investigators have some knowledge that guides the choice of the intervention package, optimizing the intervention package with respect to cost-efficiency is a primary study goal, along with estimation and inference about the effect of this optimal package on the outcome of interest. We are motivated by the BetterBirth Study that aimed to increase the use of a checklist when women give birth, in order to improve maternal and fetal health in India. In the BetterBirth Study, the intervention package was changed over time. In a two-stage “learn-as-you-go” design, the intervention package is adapted at the second stage as a function of the first-stage data. Therefore, conditioning on the interventions would lead to effectively conditioning on the first-stage outcomes, which violates common statistical principles.   For this non-independence scenario, we prove consistency and asymptotic normality of the maximum likelihood estimator using a coupling argument. The effect estimates are then plugged in a restricted optimization problem to find the optimal intervention with respect to cost. We further develop confidence sets for the optimal intervention and confidence bands under different package compositions. In addition to multi-component interventions, we also consider multiple centers with center-specific interventions based on center characteristics.  A simulation study indicates that our methodology works well already in relatively small samples.


__Yang Ni__<br>
_Heterogeneous directed cyclic graphical models_<br>
We develop novel hierarchical reciprocal graphical models to infer gene networks from heterogeneous data. In the case of data that can be naturally divided into known groups, we propose to connect graphs by introducing a hierarchical prior across group-specific graphs, including a correlation on edge strengths across graphs. Thresholding priors are applied to induce sparsity of the estimated networks. In the case of unknown groups, we cluster subjects into subpopulations and jointly estimate cluster-specific gene networks, again using similar hierarchical priors across clusters. We illustrate the proposed approach by simulation studies and two applications with multiplatform genomic data for multiple cancers.

## Group 4


__Yunlong Nie__<br>
_Topics in Functional Data Analysis_<br>
"The problem of modeling the dynamical regulation process within a gene network has been of great interest for a long time. We propose to model this dynamical system with a large number of nonlinear ordinary
differential equations (ODEs), in which the regulation function is estimated directly from data without any parametric assumption. Most current research assumes the gene regulation network is static, but in reality, the connection and
regulation function of the network may change with time or environment. This change is reflected in our dynamical model by allowing the regulation function varying with the gene expression and forcing this regulation function to be
zero if no regulation happens. We introduce a statistical method called functional SCAD to estimate a time-varying sparse and directed gene regulation network, and, simultaneously, to provide a smooth estimation of the regulation
function and identify the interval in which no regulation effect exists."


__Subhadeep Paul__<br>
_A random effects stochastic block model for community detection in multiple networks with applications to neuroimaging_<br>
Motivated by multi-subject and multi-trial experiments in neuroimaging studies, we develop a modeling framework for joint community detection in a group of related networks. The proposed model, which we call the random effects stochastic block model facilitates the study of group differences and subject specific variations in the community structure (modular organization). In contrast to the previously proposed multi-layer stochastic block models, our model allows community memberships of nodes to vary in each component network or layer with a transition matrix, thus modeling the variation in community structure across a group of subjects or trials. We propose two methods to estimate the parameters of the model, a variational-EM algorithm and two model-free ``two-step" methods based on spectral and non-negative matrix factorization respectively. We also develop several hypothesis tests with p-values obtained through resampling (permutation test) to test for differences in community structure in two groups of subjects both at the whole network level and node level. The methodology is applied to publicly available fMRI datasets from multi-subject experiments involving schizophrenia patients along with healthy controls. Our methods reveal an overall putative community structure representative of the group as well as subject-specific variations within each group. Using our network level hypothesis tests we are able to ascertain statistically significant difference in community structure between the two groups, while our node level tests help determine the nodes that are driving the difference.


__Sam Pimentel__<br>
_Constructing second control groups to attenuate unmeasured bias_<br>
It is sometimes claimed that if an irrelevant observed covariate is left unmatched in an observational study, then it will influence treatment assignment haphazardly, diminishing biases from unmeasured covariates. We prove that this is true in a limited way under certain conditions. Unfortunately the conditions are neither inconsequential nor easy to check in empirical work, and are often implausible. We suggest the result is most useful in constructing a second control group, so the investigator can see more in available data without necessarily believing the required conditions. One control group controls for the possibly irrelevant observed covariate, the other control group either leaves it uncontrolled or forces separation; the investigator views one situation from two angles under different assumptions. A pair of sensitivity analyses for the two control groups is constructed around the possibility of slight bias attenuation in one control group. Issues are illustrated using an observational study of the possible effects of cigarette smoking as a cause of increased homocysteine levels, a risk factor for cardiovascular disease.


__Thomas Porter__<br>
_Beyond HC: More sensitive tests for rare/weak alternatives_<br>
Higher Criticism (HC) is a popular method for many large-scale inference problems that retains an air of mystery about it; mainly because it is simple to understand and seems to satisfy various lower-order optimality criteria. We establish a new parametric mixture interpretation for HC that reveals some of this mystery and enables a further understanding of why HC might also not work in practice (at least in the context of multiple hypothesis testing and mixture detection).

We introduce an adaptive Rao score test that has a goodness-of-fit interpretation, which is similar to HC but has better asymptotic power properties within a $1+o(1)$ neighbourhood of the detection boundary for the sparse normal mixture detection problem.


__Wanli Qiao__<br>
_Nonparametric Confidence Regions for Density Level Sets_<br>
A level set of a density is a set where the density equals a given constant. It has many applications including clustering, classification, anomaly detection and topological data analysis. Level sets can be estimated nonparametrically using a plugin method. In this talk we present confidence regions for level sets based on asymptotic distribution and bootstrap methods. We then make comparisons with existing methods using simulations. This is joint work with Wolfgang Polonik, University of California, Davis.


__Anna Quach__<br>
_Optimizing Random Forests for Data from the Genome-Wide Association Study_<br>
Random Forests is commonly applied to data from the Genome-Wide Association study due to the fact that it can handle more predictor variables than observations and it can naturally fit interactions. Random Forests can be improved in its ability to identify interactions and efficiency by a combination of changes in its parameters settings. I show improvements in Random Forests by searching for sensible splits, using the optimal measure of variable importance, and by determining the optimal nodesize.


__Benjamin Risk__<br>
_JIVE integration of imaging and behavioral data_<br>
A major goal in neuroscience is to understand the neural pathways underlying human behavior. Motivated by recent computational and theoretical improvements in the JIVE approach, we simultaneously explore the joint and individual variation between and within imaging and behavioral data. We demonstrate that JIVE is an effective and efficient approach for integrating task fMRI and behavioral variables using three examples: one example where task variation is strong, one where task variation is weak and a reference case where the behavior is not directly related to the image. These examples are provided to visualize the different levels of signal found in the joint variation including working memory regions in the image data and accuracy and response time from the in-task behavioral variables. The joint variation estimated by JIVE appears to more clearly identify the working memory regions than Partial Least Squares (PLS), while Canonical Correlation Analysis (CCA) gives grossly overfit results. The individual variation in JIVE captures the behavior unrelated signals such as a background activation that is spatially homogeneous and activation in the default mode network. The information revealed by this individual variation is not examined in traditional methods such as CCA and PLS. We suggest that JIVE can be used as an alternative to PLS and CCA to improve estimation of the signal common to two or more datasets and reveal novel insights into the signal unique to each dataset.


__Lindsay Rutter__<br>
_bigPint: Big multivariate data plotted interactively_<br>
Scatterplot matrices, parallel coordinate plots, and replicate line plots are useful visualization tools that help us understand the relationship between variables in datasets. However, when working with large multivariate datasets, these plots are usually ineffective due to long computational time and overplotting problems. Here, we present a new version of these visualization tools that is now effective with large multivariate datasets through leveraging interactivity, linking, and summarization techniques. We envision that these new visualization tools may be useful in a variety of applications, including factor analysis, principal component analysis, and discriminant analysis; however, we have mainly tested them on large RNA-sequencing datasets. RNA-sequencing read count data frames typically contain tens to hundreds of thousands of rows that each contain at least two treatment groups with at least two replicates. Currently, the most popular RNA-sequencing analysis pipelines focus on linear models and negative binomial models with few visualization tools that are limited at best and misleading at worst. We plan to continue testing and improving upon the new visualization tools and their effectiveness at checking model assumptions for RNA-sequencing analysis. Once we have thoroughly tested the new visualization tools, we plan to combine them into an R package called bigPint (BIG multivariate data Plotted INTeractively) for the R community.


__Mauricio Sadinle__<br>
_Itemwise Conditionally Independent Nonresponse Modeling for Incomplete Multivariate Data_<br>
We introduce a nonresponse mechanism for multivariate missing data in which each study variable and its nonresponse indicator are conditionally independent given the remaining variables and their nonresponse indicators.  This is a nonignorable missingness mechanism, in that nonresponse for any item can depend on values of other items that are themselves missing. We show that, under this itemwise conditionally independent nonresponse assumption, one can define and identify nonparametric saturated classes of joint multivariate models for the study variables and their missingness indicators.  We also show how to perform sensitivity analysis to violations of the conditional independence assumptions encoded by this missingness mechanism.  We illustrate this modeling approach with data analyses.


__Abolfazl Safikhani__<br>
_Structural break detection for high-dimensional VAR models using total variation penalty_<br>
Assuming stationarity is unrealistic in many time series applications. A more realistic alternative is to assume piecewise stationarity, where the model is allowed to change at given time points. In this article, the problem of detecting the change points in a high-dimensional piecewise Vector Autoregressive model (VAR) is considered. This problem is reformulated as a high-dimensional variable selection framework. A penalized least square estimation using total variation LASSO penalty is then proposed for estimation of model parameters. It is shown that the developed method over-estimates the number of change points. A backward selection criterion is thus proposed in conjunction with the penalized least square estimator to tackle this issue. We prove that the proposed two-stage procedure can consistently detect the number of change points and their locations. A block coordinate descent algorithm is developed for efficient computation of model parameters. The performance of the method is illustrated using several simulation scenarios.


__Ville Satopää__<br>
_Forecast Aggregation Under a Mixture of Measurement Error and Information Diversity_<br>
Even though aggregating multiple predictions typically outperforms the average individual prediction, there is no consensus about the right way to do this. Optimally, an aggregator would use all the information in the predictions. This is possible but requires a model for how the predictions differ from each other and the outcome. To this end, past literature has discussed two philosophically distinct sources: measurement error ascribes differences to forecasters’ errors in measuring some ``ideal’’ prediction, whereas information diversity supposes that the predictions differ because the forecasters use different information. Unfortunately, even though in practice both sources are likely to be present, their individual contributions cannot be identified or separated from the predictions. Therefore existing aggregators often address one source or the other.

In addition, the predictions are typically correlated. To capture this, existing approaches assume the forecasters to predict multiple related outcomes. Multiple predictions per forecaster, however, are not always available in practice. The most challenging yet common scenario occurs when each forecaster predicts a single outcome. This ``one-shot’’ prediction environment produces the least amount of data and hence poses the most challenges for aggregation. 

In this work, we develop methodology for the ``one-shot’’ environment. Our aggregator arises from a mixture model of measurement error and information diversity, and is therefore, to the best of our knowledge, the first method that addresses both sources of variation simultaneously. Estimation relies on Bayesian statistics, leading to a posterior distribution of the consensus aggregate. Our methodology is illustrated on real-world and synthetic forecasting data.


__Martin Slawski__<br>
_On the use of Random Projections for Dimension Reduction in Linear Regression_<br>
Principal Components Regression (PCR) is a traditional tool for dimension reduction in linear regression that has been both criticized and defended. One concern about PCR is that obtaining the leading principal components tends to be computationally demanding for large data sets.  While Random Projections (RPs) do not possess the optimality properties of the projection onto the leading principal subspace, they are computationally appealing and hence have become increasingly popular in recent years. In this talk, we present an analysis showing that the dimension reduction offered by RPs achieves a prediction error in subsequent regression close to that of PCR, at the expense of requiring a slightly large number of RPs than PCs.


## Group 5

__Lucia Tabacu__<br>
_Weak convergence of the linear rank statistics under strong mixing conditions_<br>
We obtain the asymptotic distribution of the linear rank statistics under weak dependence. We consider a sequence of strong mixing random vectors with unequal dimensions and show the asymptotic normality of the rank statistics based on overall ranking.


__Dootika Vats__<br>
_Geometric Ergodicity of Gibbs Samplers in Bayesian Lassos_<br>
We consider three Bayesian penalized regression models and show that the respective deterministic scan Gibbs samplers are geometrically ergodic regardless of the dimension of the regression problem. We prove geometric ergodicity of the Gibbs samplers for the Bayesian fused lasso, the Bayesian group lasso, and the Bayesian sparse group lasso. Geometric ergodicity along with a moment condition results in the existence of a Markov chain central limit theorem for Monte Carlo averages and ensures reliable output analysis. Our results of geometric ergodicity allow us to also provide default starting values for the Gibbs samplers.


__Samuel W.K. Wong__<br>
_Monte Carlo Sampling for Protein Folding:  Fast Low-energy Loop Construction_<br>
Since the 1970s, widespread attention has been given to developing computational methods to predict a protein's 3-D structure from its amino acid sequence. Certain flexible segments in proteins, called loops, are important as they often bind or interact with other molecules. Loops have highly variable 3-D structures, and remain difficult to predict computationally even as the database of known protein structures obtained from laboratory experiments has grown. Methods for predicting loop segments must search a high-dimensional space of possible configurations. We present a new method inspired by sequential Monte Carlo that finds loop conformations with low potential energy faster and more effectively. It can be readily integrated into structure prediction protocols for applications such as protein and drug design.


__Guan Yu__<br>
_Optimal Sparse Linear Prediction for Block-missing Multi-modality Data without Imputation_<br>
In modern scientific research, data are often collected from multiple
modalities. Since different modalities could provide complementary
information, statistical prediction methods using multi-modality data could deliver better prediction performance than using single modality data. However, one special challenge for using multi-modality data is related to block-missing data. In this paper, we propose a new Direct Sparse regression procedure using COvariance from Multi-modality data
(DISCOM). Our proposed DISCOM method includes two steps to find the
optimal linear prediction of a continuous response variable using block-missing multi-modality predictors without imputation. The number of
samples that are effectively used by DISCOM is the minimum number of
samples with available observations from two modalities, which can be
much larger than the number of samples with complete observations for
all modalities. The effectiveness of the proposed method is demonstrated by theoretical studies, simulated examples, and a real application from the Alzheimer's Disease Neuroimaging Initiative. The comparison between DISCOM and some existing methods also indicates the advantages of our method.


__Jing Zhang__<br>
_Detecting outlying trials in network meta-analysis_<br>
Network meta-analysis (NMA) expands the scope of a conventional pairwise meta-analysis to simultaneously handle multiple treatment comparisons. However, some trials may appear to deviate markedly from the others and thus be inappropriate to be synthesized in the NMA. In addition, the inclusion of these trials in evidence synthesis may lead to bias in estimation. We call such trials trial-level outliers. To the best of our knowledge, while heterogeneity and inconsistency in NMA have been extensively discussed and well addressed, few previous papers have considered the proper detection and handling of trial-level outliers. In this paper, we propose several Bayesian outlier detection measures, which are then applied to a diabetes data set. Simulation studies comparing our approaches in both arm-based and contrast-based model settings are provided in two supporting appendices.


__Qi Zhang__<br>
_An Empirical Bayes Test for Allelic-Imbalance Detection in ChIP-seq_<br>
Chromatin immunoprecipitation followed by high-throughput sequencing (ChIP-seq) has enabled discovery of genomic regions enriched with biological signals such as transcription factor binding sites and histone modifications. Allelic-Imbalance detection is a complementary analysis of ChIP-seq data for associating biological signals with single nucleotide polymorphisms (SNPs) and has been successfully used in elucidating functional roles of non-coding SNPs. Commonly used statistical approaches for Allelic-Imbalance detection are often based on binomial testing and mixture models, both of which rely on strong assumptions on the distribution of the unobserved allelic probability, and have significant practical shortcomings. We propose Non-Parametric Binomial (NPBin) test for Allelic-Imbalance detection and for modeling Binomial data in general. NPBin models the density of the unobserved allelic probability non-parametrically, and estimates its empirical null distribution via curve fitting. We demonstrate the advantage of NPBin in its interpretability of the estimated density and  the accuracy in Allelic-Imbalance detection using simulations and analysis of several ChIP-seq datasets. We also illustrate the generality of our modeling framework beyond Allelic-Imbalance detection by an effect size estimation problem with application to baseball data.


__Xin (Henry) Zhang__<br>
_Parsimonious Tensor Response Regression_<br>
Aiming at abundant scientific and engineering data with not only high dimensionality but also complex structure, we study the regression problem with a multidimensional array (tensor) response and a vector predictor. Applications include, among others, comparing tensor images across groups after adjusting for additional covariates, which is of central interest in neuroimaging analysis. We propose parsimonious tensor response regression adopting a generalized sparsity principle. It models all voxels of the tensor response jointly, while accounting for the inherent
structural information among the voxels. It effectively reduces the number of free parameters, leading to feasible computation and improved interpretation. We achieve model estimation through a nascent technique called the envelope method, which identifies the immaterial information and focuses the estimation based upon the material information in the tensor response. We demonstrate that the resulting estimator is asymptotically efficient, and it enjoys a competitive finite sample performance. We also illustrate the new method on two real neuroimaging studies.


__Yan (Dora) Zhang__<br>
_Estimation of complex effect-size distributions using summary-level statistics from genome-wide association studies of 32 complex traits reveals implications for the future_<br>
Summary-level statistics from genome-wide association studies are now widely being used to estimate heritability and co-heritability of traits through the popular linkage-disequilibrium-score (LD-score) regression method. We describe a novel likelihood based approach for analyzing summary-level statistics and external LD information to estimate effect size distribution associated with common genetic variants, characterized by proportion of underlying susceptibility SNPs, and a flexible normal-mixture model for their effects. Analysis of publicly available summary-level results across 32 GWAS reveals that while all traits are highly polygenic, there is wide diversity in degree of polygenecity. For a variety of the traits, the mixture-model identified existence of fraction of susceptibility SNPs that have distinctly larger effects than others.  Among quantitative traits, we predict that the sample size needed to identify SNPs that will explain 80% of GWAS heritability to be 300K-500K for some of the early growth traits, between 1-2 millions for some anthropometric and cholesterol traits and into multiple millions for others. For disease traits, we predict the corresponding requirements to be 200K-400K for inflammatory bowel diseases, close to one million for a variety of common adult onset chronic diseases, and between 1-2 millions for the psychiatric diseases.


__Ni Zhao__<br>
_Composite Kernel Machine Regression based on Likelihood Ratio Test and Its Application on Genomic Studies_<br>
Most common human diseases are a result from the combined effect of genes, the environmental factors and their possible interaction. It is of considerable interest in the statistical field to incorporate gene-environment (GE) interaction to detect trait-associated genetic variants in the past few years. The standard strategy is to test the SNPs one by one using a regression model that includes both the SNP effect and the GE interaction. Despite the popularity, the SNP-by-SNP approach suffer from serious limitations, including the inability to model epistatic SNP effect, biased estimation and reduced power. In this paper, we extend the kernel machine regression framework to model the overall genetic effect of a SNP-set, considering the possible GE interaction. Specifically, we use a composite kernel to specify the overall genetic effect via a nonparametric function and we model additional covariates parametrically within the regression framework.  The composite kernel is constructed as a weighted average of two kernels, each corresponding to the genetic main effect and GE interaction effect respectively. We propose to a likelihood ratio test (LRT) and restricted likelihood ratio test for statistical significance. We derive a Monte Carlo approach for the finite sample distributions of LRT and RLRT. Extensive simulations and real data analysis show that our proposed method has correct type I error and higher power than score-based approaches.


